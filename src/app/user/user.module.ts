import { Module } from '@nestjs/common';
import { CreateUserController } from './use-cases/CreateUser/CreateUser.controller';
import { CreateUserService } from './use-cases/CreateUser/CreateUser.service';

@Module({
  imports: [],
  controllers: [CreateUserController],
  providers: [
    {
      provide: 'ICreateUserService',
      useClass: CreateUserService,
    },
  ],
})
export class UserModule {}
