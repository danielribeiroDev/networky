import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [
  ],

  controllers: [],

  providers: [
    AuthService, 
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
  ],
  
  exports: [AuthService]
})
export class AuthModule {}
