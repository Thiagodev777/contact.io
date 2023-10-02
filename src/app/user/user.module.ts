import { Module } from '@nestjs/common';
import { CreateUserController } from './use-cases/CreateUser/CreateUser.controller';
import { CreateUserService } from './use-cases/CreateUser/CreateUser.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [CreateUserController],
  providers: [
    {
      provide: 'ICreateUserService',
      useClass: CreateUserService,
    },
  ],
})
export class UserModule {}
