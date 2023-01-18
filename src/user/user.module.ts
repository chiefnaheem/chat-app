import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Services } from 'src/utils/constants';
import { UserController } from './controller/user.controller';
import { User } from './entities/user.entity';
import { UserService } from './service/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
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
