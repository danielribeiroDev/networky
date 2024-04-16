import { BadRequestException, ConflictException, Inject, Injectable, NotFoundException, forwardRef } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly authService: AuthService
  ) {}

  async create(createUserDto : CreateUserDto, company: CompanyEntity) : Promise<UserEntity> {
    const mergedData = {...createUserDto, company}
    const user = this.userRepository.create(mergedData)
    if(await this.userRepository.exists( { where: { email: user.email } } ))
      throw new ConflictException('Email already exist')
    user.password = await this.authService.hashPassword(user.password)
    return this.userRepository.save(user)
  }

  async findAll() {
    return this.userRepository.find({relations: ['company']});
  }

  async findById(id : string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if(!user) 
      throw new NotFoundException('User not found')
    
    return user;
  }

  async findByEmail(email: string ) {
    const user = await this.userRepository.findOne({ where: { email } });
    if(!user) 
      throw new NotFoundException('User not found')
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
     return updateUserDto;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async confirm(token : string) : Promise<UserEntity>{
    const decoded = await this.authService.decodeToken(token);    
    const user = await this.findById(decoded.id);
    if(user.isConfirmed){
      throw new BadRequestException('Email already confirmed')
    }
    user.isConfirmed = true;
    return this.userRepository.save(user);
  }

  
}
