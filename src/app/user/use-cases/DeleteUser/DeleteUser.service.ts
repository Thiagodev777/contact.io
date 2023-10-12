import { Injectable, NotFoundException } from '@nestjs/common';
import { IDeleteUserService } from '../../interfaces/IDeleteUser/IDeleteUserService';
import { IUser } from '../../entity/IUser';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entity/User';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteUserService implements IDeleteUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async execute(id: string): Promise<Partial<IUser>> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) throw new NotFoundException('user not found');

    await this.userRepository.delete({ id });

    const deletedUser = { ...user };
    delete deletedUser['password'];

    return deletedUser;
  }
}
