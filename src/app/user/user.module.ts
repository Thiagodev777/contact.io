import { Module } from '@nestjs/common';
import { CreateUserController } from './use-cases/CreateUser/CreateUser.controller';
import { CreateUserService } from './use-cases/CreateUser/CreateUser.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/User';
import { ListUsersService } from './use-cases/ListUsers/ListUsers.service';
import { ListUsersController } from './use-cases/ListUsers/ListUsers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [CreateUserController, ListUsersController],
  providers: [
    {
      provide: 'ICreateUserService',
      useClass: CreateUserService,
    },
    {
      provide: 'IListUsersService',
      useClass: ListUsersService,
    },
  ],
})
export class UserModule {}
