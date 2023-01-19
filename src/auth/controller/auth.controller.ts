import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { IUserService } from 'src/user/user';
import { Routes, Services } from 'src/utils/constants';
import { IAuthService } from '../auth';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';
import { AuthRoute } from '../utils/types';

@Controller(Routes.AUTH)
export class AuthController {
    constructor(
        @Inject(Services.USER) private readonly userService: IUserService,
        @Inject(Services.AUTH) private readonly authService: IAuthService
    ) {}

    @Post('register')
    async register (@Body() body: RegisterDto) {
        return instanceToPlain(await this.userService.createUser(body))
    }

    @Post('login')
    async login(@Body() body: LoginDto) {
        // return instanceToPlain(await this.authService.login(body))
    }
}
