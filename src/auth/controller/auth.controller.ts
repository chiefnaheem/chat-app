import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IUserService } from 'src/user/user';
import { Services } from 'src/utils/types';
import { IAuthService } from '../auth';
import { RegisterDto } from '../dto/register.dto';
import { AuthRoute } from '../utils/types';

@Controller(AuthRoute.AUTH)
export class AuthController {
    constructor(
        @Inject(Services.USER) private readonly userService: IUserService,
        @Inject(Services.AUTH) private readonly authService: IAuthService
    ) {}

    @Post('register')
    register (@Body() body: RegisterDto) {
        return this.userService.createUser(body);
    }
}
