import {
Body,
Controller,
Get,
HttpCode,
HttpStatus,
Post,
Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AllowAnon } from './decorators/AllowAnon';

@Controller('auth')
    export class AuthController {
    constructor(private authService: AuthService) {}
    
    @AllowAnon()
    @Post('token')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }
}