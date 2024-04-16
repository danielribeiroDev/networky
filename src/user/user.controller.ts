import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, BadRequestException, NotFoundException, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AllowAnon } from 'src/auth/decorators/AllowAnon';
import { CompanyService } from 'src/company/company.service';
import { CreateUserDto } from './dto/create-user.dto';
import { EmailService } from 'src/email/email.service';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly companyService: CompanyService,
    private readonly emailService: EmailService
  ) {}

  @AllowAnon()
  @Post()
  async create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    const company = await this.companyService.findById(createUserDto.companyId);
    const user = await this.userService.create(createUserDto, company);
    const confirmationToken = await this.authService.genConfirmationToken(user.id)
    this.emailService.sendMail(
      user.email,
        'Networky - email confirmation',
        'Please confirm your email by clicking the link below',
        `<a href="http://172.19.120.157:3000/user/confirm?token=${confirmationToken}">Confirm your email</a>`
    )
    return 
  }

  @AllowAnon()
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @AllowAnon()
  @Get('confirm')
  async confirm(@Query('token') token: string) {
    const user = await this.userService.confirm(token);
    return user.isConfirmed;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'dfasd'
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
