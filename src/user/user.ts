import { CreateUserParams, FindUserParams } from "src/utils/types";
import { User } from "./entities/user.entity";

export interface IUserService {
    createUser(userDetails: CreateUserParams): Promise<User>;
    findUser(findUserParams : FindUserParams): Promise<User>;
}
