import { BadRequestException, Injectable } from '@nestjs/common';
import { ICreateUserService } from '../../interfaces/ICreateUser/ICreateUserService';
import { CreateUserDTO } from '../../dto/CreateUserDTO';
import { User } from '../../entity/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUser } from '../../entity/IUser';

@Injectable()
export class CreateUserService implements ICreateUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async execute({
    name,
    email,
    password,
    age,
    city,
  }: CreateUserDTO): Promise<IUser> {
    const emailExists = await this.userRepository.findOneBy({ email });
    if (emailExists) throw new BadRequestException('email already exists');

    const user = this.userRepository.create({
      name,
      email,
      password,
      age,
      city,
    });

    await this.userRepository.save(user);

    const userCreated = { ...user };
    delete userCreated['password'];

    return userCreated;
  }
}
