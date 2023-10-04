import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entity/User';
import { Repository } from 'typeorm';
import { IUser } from '../../entity/IUser';
import { IListUserEmailService } from '../../interfaces/IListUserEmail/IListUserEmailService';

@Injectable()
export class ListUserEmailService implements IListUserEmailService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async execute(email: string): Promise<IUser | null> {
    return this.userRepository.findOne({ where: { email } });
  }
}
