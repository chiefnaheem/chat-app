import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from 'src/utils/helpers';
import { CreateUserParams, FindUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { IUserService } from '../user';

@Injectable()
export class UserService implements IUserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) {}
    findUser(findUserParams: FindUserParams): Promise<User> {
        return this.userRepository.findOne({
            where: {
                ...findUserParams
            }
        });

    }

    async createUser(userDetails: CreateUserParams): Promise<User | null >{
        try {

            const userExists = await this.userRepository.findOne({
                where: {
                    email: userDetails.email
                }
            });
            if (userExists) {
                throw new HttpException('User already exists', HttpStatus.CONFLICT);
                // return null
            }
            const password = await hashPassword(userDetails.password);
            const user = this.userRepository.create({
                ...userDetails,
                password
            });
            return this.userRepository.save(user);
        }
        catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    


}
