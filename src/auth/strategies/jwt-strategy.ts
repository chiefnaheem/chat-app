
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { User } from 'src/user/entities/user.entity'
import { Services } from 'src/utils/constants'
import { IAuthService } from '../auth'
import { AuthService } from '../service/auth.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(@Inject(Services.AUTH) private readonly authService: IAuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.TOKEN_SECRET,
    })
  }

  async validate(email: string, password: string): Promise<User> {
    const user = await this.authService.validateUser({email, password});
    return user
  }
}

