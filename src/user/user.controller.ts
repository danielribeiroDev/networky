import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';
import { EmailService } from 'src/email/email.service';
import { JwtService } from '@nestjs/jwt';
import { AllowAnon } from 'src/auth/decorators/AllowAnon';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService
  ) {}

  @AllowAnon()
  @Post()
  async create(@Body() createUserDto: SignUpDto) {
    const user =  this.userService.create(createUserDto);
    const confirmationToken = await this.jwtService.signAsync({ userId: user.id })
    this.emailService.sendMail(
      user.email,
      'Confirm your email',
      'Please confirm your email by clicking the link below',
      `<a href="http://172.19.120.157:3000/email-confirmation?token=${confirmationToken}">Confirm your email</a>`
    );
    return user;
  }

  @AllowAnon()
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
