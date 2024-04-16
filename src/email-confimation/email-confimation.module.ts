import { Module } from '@nestjs/common';
import { EmailConfimationController } from './email-confimation.controller';
import { EmailConfimationService } from './email-confimation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { EmailModule } from 'src/email/email.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    EmailModule,
    AuthModule
  ],
  controllers: [EmailConfimationController],
  providers: [EmailConfimationService],
  exports: [EmailConfimationService]
})
export class EmailConfimationModule {}
