import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignInDto } from 'src/auth/dto/sign-in.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CompanyEntity } from 'src/company/entities/company.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  create(createUserDto: SignInDto) {
    /*Verify if createUserDto.email already exist
    if exist, return a message that the email already exist
    Create user in the database
    */
    const user = {id: 1, email: 'danieldiasstudent@gmail.com'}

    return user;
  }

  async findAll() {
    const users = this.userRepository.find();
    //maybe i need users find all dto and use .map to return the users
  }

  findOne(id: number ) {
    const company = new CompanyEntity();
    
    return {id: 1, password  : '123456'}
    
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
