import { Inject, Injectable, NotFoundException, UnauthorizedException, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import {hash, compare} from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private configService: ConfigService

    ) {}

    
    async createToken(user : UserEntity, plainTextPassword: string): Promise<{ access_token: string }> {
        if(!await this.verifyPassword(plainTextPassword, user.password)) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, email: user.email }

        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }

    async decodeToken(token : string) {
        return this.jwtService.verifyAsync(token);
    }

    async hashPassword(plainTextPassword: string): Promise<string> {
        const sault : number = parseInt(this.configService.get<string>('SALT_ROUNDS'));
        return await hash(plainTextPassword, sault);
    }

    async verifyPassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
        return await compare(plainTextPassword, hashedPassword);
    }

    async genConfirmationToken(id : string) {
        return this.jwtService.signAsync({ id });
    }
}
