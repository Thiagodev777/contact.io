import { Module } from '@nestjs/common';
import { CreateUserController } from './use-cases/CreateUser/CreateUser.controller';
import { CreateUserService } from './use-cases/CreateUser/CreateUser.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/User';
import { ListUsersService } from './use-cases/ListUsers/ListUsers.service';
import { ListUsersController } from './use-cases/ListUsers/ListUsers.controller';
import { ListUserEmailService } from './use-cases/ListUserEmail/ListUserEmail.service';
import { ListUserEmailController } from './use-cases/ListUserEmail/ListUserEmail.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [
    CreateUserController,
    ListUsersController,
    ListUserEmailController,
  ],
  providers: [
    {
      provide: 'ICreateUserService',
      useClass: CreateUserService,
    },
    {
      provide: 'IListUsersService',
      useClass: ListUsersService,
    },
    {
      provide: 'IListUserEmailService',
      useClass: ListUserEmailService,
    },
  ],
  exports: ['IListUserEmailService'],
})
export class UserModule {}
