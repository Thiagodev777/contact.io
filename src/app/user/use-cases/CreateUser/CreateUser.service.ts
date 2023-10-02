import { Injectable } from '@nestjs/common';
import { ICreateUserService } from '../../interfaces/ICreateUserService';
import { CreateUserDTO } from '../../dto/CreateUserDTO';
import { User } from '../../entity/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
  }: CreateUserDTO): Promise<User> {
    const user = this.userRepository.create({
      name,
      email,
      password,
      age,
      city,
      created_at: new Date(),
    });

    // Regra de negocio
    return this.userRepository.save(user);
  }
}
