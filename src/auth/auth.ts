import { LoginParams } from "src/utils/types";

export interface IAuthService {
    validateUser(body: LoginParams): Promise<any>;
}