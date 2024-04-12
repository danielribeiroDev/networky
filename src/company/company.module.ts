import { Module } from '@nestjs/common';

@Module({
    exports: [CompanyModule],
})
export class CompanyModule {}
