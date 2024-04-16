import { Controller, Get, Query } from '@nestjs/common';
import { AllowAnon } from 'src/auth/decorators/AllowAnon';
import { EmailConfimationService } from './email-confimation.service';

@Controller('email-confirmation')
export class EmailConfimationController {
    constructor(private readonly emailConfimationService: EmailConfimationService) {}

    @AllowAnon()
    @Get()
    async confirmEmail(@Query('token') token: string) {
        const decoded = await this.emailConfimationService.confirmEmail(token);
        const user = 
    }   
}
