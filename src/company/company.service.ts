import { ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CompanyEntity } from './entities/company.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(CompanyEntity)
        private readonly companyRepository: Repository<CompanyEntity>
    ) {}

    async create(createCompanyDto: CreateCompanyDto) : Promise<CompanyEntity>{
        const company = this.companyRepository.create(createCompanyDto)
        if(await this.companyRepository.exists( { where: { name: company.name } } ))
            throw new ConflictException('Company already exist')
        return this.companyRepository.save(company)
    }

    async findById(id: string) : Promise<CompanyEntity> {
        const company =  await this.companyRepository.findOne({
            where: {
                id
            }
        });
        if(!company) 
            throw new NotFoundException('Company not found');
        return company;
    }

    async findAll() : Promise<CompanyEntity[]> {
        return this.companyRepository.find();
    }
}
