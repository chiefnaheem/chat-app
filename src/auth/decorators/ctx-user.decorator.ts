import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const CtxUser = createParamDecorator(
    (data: string | undefined, context: ExecutionContext) => {
      const req = context.switchToHttp().getRequest();
      return req.user;
    },
  );