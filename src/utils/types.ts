export type CreateUserParams = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};

export type LoginParams = {
    email: string;
    password: string;
};

export type FindUserParams = Partial<{
    email: string;
    firstName: string;
}>;