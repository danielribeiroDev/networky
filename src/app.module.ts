import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EmailModule } from './email/email.module';
import { EmailConfimationModule } from './email-confimation/email-confimation.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { PostgresConfigService } from './config/postgres.config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CompanyModule } from './company/company.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { TokenModule } from './token/token.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env',
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '1h'}
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService, ConfigService]
    }),
    UserModule, 
    CompanyModule,
    AuthModule, 
    EmailConfimationModule, 
    EmailModule, TokenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
