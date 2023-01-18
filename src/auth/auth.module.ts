import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { Services } from 'src/utils/constants';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    {
      provide: Services.AUTH,
      useClass: AuthService,
    },
  ]
})
export class AuthModule {}
