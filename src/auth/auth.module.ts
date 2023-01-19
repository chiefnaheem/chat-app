import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { Services } from 'src/utils/constants';
import { AuthController } from './controller/auth.controller';
import { SessionSerializer } from './guards/session-serializer';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './strategies/local-strategy';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    SessionSerializer,
    {
      provide: Services.AUTH,
      useClass: AuthService,
    },
  ]
})
export class AuthModule {}
