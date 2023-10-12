import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser } from '../../entity/IUser';
import { Repository } from 'typeorm';
import { User } from '../../entity/User';
import { IListUsersService } from '../../interfaces/IListUsers/IListUsersService';

@Injectable()
export class ListUsersService implements IListUsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  execute(): Promise<Partial<IUser[]>> {
    return this.userRepository.find({
      select: {
        id: true,
        name: true,
        email: true,
        city: true,
        age: true,
        createdAt: true,
        updatedAt: true,
      },
      order: { name: 'ASC' },
    });
  }
}
