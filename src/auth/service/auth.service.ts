import { HttpException, Inject, Injectable } from '@nestjs/common';
import { IUserService } from 'src/user/user';
import { Services } from 'src/utils/constants';
import { comparePassword } from 'src/utils/helpers';
import { LoginParams } from 'src/utils/types';
import { IAuthService } from '../auth';

@Injectable()
export class AuthService implements IAuthService {
    constructor (
        @Inject(Services.USER) private readonly userService: IUserService
    ) {}
    async validateUser(loginDetails: LoginParams) {
        const user = await this.userService.findUser({
            email: loginDetails.email,
        });
        if(!user) {
            throw new HttpException('Invalid credentials', 404);
        }
        const isPasswordValid = await comparePassword(loginDetails.password, user.password);
    }
}
