import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from './entities/company.entity';
import { CompanyController } from './company.controller';

@Module({
    imports: [TypeOrmModule.forFeature([CompanyEntity])],
    providers: [CompanyService],
    exports: [CompanyService],
    controllers: [CompanyController],
})
export class CompanyModule {}
