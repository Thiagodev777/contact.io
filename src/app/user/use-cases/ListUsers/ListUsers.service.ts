import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser } from '../../entity/IUser';
import { Repository } from 'typeorm';
import { User } from '../../entity/User';
import { IListUsersService } from '../../interfaces/IListUsers/IListUsersService';

@Injectable()
export class ListUsersService implements IListUsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  execute(): Promise<IUser[]> {
    return this.userRepository.find();
  }
}
