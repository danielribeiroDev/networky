import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService

    ) {}

    
    async signIn(id: number, pass: string): Promise<{ access_token: string }> {
        const user = await this.userService.findOne(id);
        if(user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, email: user.password }

        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
