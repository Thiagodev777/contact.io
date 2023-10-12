import { Module } from '@nestjs/common';
import { CreateUserController } from './use-cases/CreateUser/CreateUser.controller';
import { CreateUserService } from './use-cases/CreateUser/CreateUser.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/User';
import { ListUsersService } from './use-cases/ListUsers/ListUsers.service';
import { ListUsersController } from './use-cases/ListUsers/ListUsers.controller';
import { ListUserEmailService } from './use-cases/ListUserEmail/ListUserEmail.service';
import { ListUserEmailController } from './use-cases/ListUserEmail/ListUserEmail.controller';
import { UpdateUserController } from './use-cases/UpdateUser/UpdateUser.controller';
import { UpdateUserService } from './use-cases/UpdateUser/UpdateUser.service';
import { ListUserController } from './use-cases/ListUser/ListUser.controller';
import { ListUserService } from './use-cases/ListUser/ListUser.service';
import { DeleteUserService } from './use-cases/DeleteUser/DeleteUser.service';
import { DeleteUserController } from './use-cases/DeleteUser/DeleteUser.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [
    CreateUserController,
    ListUsersController,
    ListUserController,
    ListUserEmailController,
    UpdateUserController,
    DeleteUserController,
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
      provide: 'IListUserService',
      useClass: ListUserService,
    },
    {
      provide: 'IListUserEmailService',
      useClass: ListUserEmailService,
    },
    {
      provide: 'IUpdateUserService',
      useClass: UpdateUserService,
    },
    {
      provide: 'IDeleteUserService',
      useClass: DeleteUserService,
    },
  ],
  exports: ['IListUserEmailService'],
})
export class UserModule {}
