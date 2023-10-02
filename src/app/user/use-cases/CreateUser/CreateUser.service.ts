import { Injectable } from '@nestjs/common';
import { ICreateUserService } from '../../interfaces/ICreateUserService';
import { CreateUserDTO } from '../../dto/CreateUserDTO';
import { User } from '../../entity/User';

@Injectable()
export class CreateUserService implements ICreateUserService {
  execute({ name, email, password, age, city }: CreateUserDTO) {
    // Regra de negocio

    const user = new User(name, email, password, city, age);
    console.log(user);
    return;
  }
}
