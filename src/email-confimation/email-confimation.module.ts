import { Module } from '@nestjs/common';
import { EmailConfimationController } from './email-confimation.controller';
import { EmailConfimationService } from './email-confimation.service';

@Module({
  controllers: [EmailConfimationController],
  providers: [EmailConfimationService]
})
export class EmailConfimationModule {}
