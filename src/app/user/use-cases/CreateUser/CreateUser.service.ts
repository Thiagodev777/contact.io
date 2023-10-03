import { Injectable } from '@nestjs/common';
import { ICreateUserService } from '../../interfaces/ICreateUser/ICreateUserService';
import { CreateUserDTO } from '../../dto/CreateUserDTO';
import { User } from '../../entity/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUser } from '../../interfaces/IUser';

@Injectable()
export class CreateUserService implements ICreateUserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async execute({
    name,
    email,
    password,
    age,
    city,
  }: CreateUserDTO): Promise<IUser> {
    const user = this.userRepository.create({
      name,
      email,
      password,
      age,
      city,
      created_at: new Date(),
    });

    return this.userRepository.save(user);
  }
}
