import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class TokenService {
    constructor(
        private readonly userService : UserService,
        private readonly authService : AuthService
    ) {}

    async createToken(email: string, plainTextPassword: string) {
        const user = await this.userService.findByEmail(email);
        return this.authService.createToken(user, plainTextPassword);
    }
}
