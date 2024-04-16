import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { EmailService } from 'src/email/email.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class EmailConfimationService {
    constructor(
        private readonly authService: AuthService,
        private readonly emailService: EmailService,
        @InjectRepository(UserEntity)
    ) {}

    async confirmEmail(token: string): Promise<UserEntity> {
        const decoded = await this.authService.decodeToken(token)
    }

    async sendConfirmationEmail(id: string, email: string) : Promise<any> {
        const confirmationToken = await this.jwtService.signAsync({ id });
        this.emailService.sendMail(
            email,
            'Networky - email confirmation',
            'Please confirm your email by clicking the link below',
            `<a href="http://172.19.120.157:3000/email-confirmation?token=${confirmationToken}">Confirm your email</a>`
        );
    }
}
