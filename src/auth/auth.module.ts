import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { Services } from 'src/utils/constants';
import { AuthController } from './controller/auth.controller';
import { JwtGuard } from './guards/auth.guard';
import { SessionSerializer } from './guards/session-serializer';
import { AuthService } from './service/auth.service';
import { JwtStrategy } from './strategies/jwt-strategy';
import { LocalStrategy } from './strategies/local-strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.TOKEN_SECRET,
      signOptions: { expiresIn: process.env.JWT_LIFESPAN },
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [
    JwtStrategy,
    JwtGuard,
    {
      provide: Services.AUTH,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
