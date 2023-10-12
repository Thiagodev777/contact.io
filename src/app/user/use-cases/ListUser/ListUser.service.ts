import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entity/User';
import { Repository } from 'typeorm';
import { IUser } from '../../entity/IUser';
import { IListUserService } from '../../interfaces/IListUser/IListUserService';

@Injectable()
export class ListUserService implements IListUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async execute(id: string): Promise<Partial<IUser>> {
    const user = await this.userRepository.findOne({
      select: {
        id: true,
        name: true,
        email: true,
        city: true,
        age: true,
        createdAt: true,
        updatedAt: true,
      },
      where: { id },
    });

    if (!user) throw new NotFoundException('user not found');

    return user;
  }
}
