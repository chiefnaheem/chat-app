import { Module } from '@nestjs/common';
import { Services } from 'src/utils/types';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';

@Module({
  controllers: [UserController],
  providers: [{
    provide: Services.USER,
    useClass: UserService,
  }],
  exports: [{
    provide: Services.USER,
    useClass: UserService,
  }]
})
export class UserModule {}
