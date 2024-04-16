import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AllowAnon } from 'src/auth/decorators/AllowAnon';
import { CreateTokenDto } from './dto/createTokenDto';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
    constructor(
        private readonly tokenService : TokenService
    ) {}

    @AllowAnon()
    @Post()
    createToken(@Body(ValidationPipe) createTokenDto : CreateTokenDto) {
        return this.tokenService.createToken(createTokenDto.email, createTokenDto.password)
    }
}
