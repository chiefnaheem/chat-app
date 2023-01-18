import { Injectable } from '@nestjs/common';
import { CreateUserParams } from 'src/utils/types';
import { IUserService } from '../user';

@Injectable()
export class UserService implements IUserService {
    createUser(userDetails: CreateUserParams) {
        throw new Error('Method not implemented.');
    }
}
