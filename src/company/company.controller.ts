import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CompanyService } from './company.service';
import { AllowAnon } from 'src/auth/decorators/AllowAnon';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('company')
export class CompanyController {
    constructor(
        private readonly companyService: CompanyService
    ) {}
    
    @AllowAnon()
    @Post()
    async createCompany(@Body(ValidationPipe) createCompanyDto: CreateCompanyDto) {
        return this.companyService.create(createCompanyDto)
    }
    
    @AllowAnon()
    @Get() 
    async getCompany() { 
        const allCompanies = await this.companyService.findAll();
        return allCompanies;
    }

}
