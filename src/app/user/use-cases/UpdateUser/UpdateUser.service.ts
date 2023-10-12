import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDTO } from '../../dto/UpdateUserDTO';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entity/User';
import { Repository } from 'typeorm';
import { IUser } from '../../entity/IUser';
import { hashSync } from 'bcrypt';
import { IUpdateUserService } from '../../interfaces/IUpdateUser/IUpdateUserService';

@Injectable()
export class UpdateUserService implements IUpdateUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async execute(
    id: string,
    { name, email, password, city, age }: UpdateUserDTO,
  ): Promise<Partial<IUser>> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException('user not found');

    if (email) {
      const emailExists = await this.userRepository.findOneBy({
        email: email,
      });
      if (emailExists) throw new BadRequestException('email already exists');
    }

    if (password) {
      password = hashSync(password, 10);
    }

    await this.userRepository.update(id, { name, email, password, city, age });

    const updatedUser = await this.userRepository.findOneBy({ id });
    delete updatedUser['password'];

    return updatedUser;
  }
}
