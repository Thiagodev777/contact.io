import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entity/User';
import { Repository } from 'typeorm';
import { IUser } from '../../entity/IUser';
import { IListUserEmailService } from '../../interfaces/IListUserEmail/IListUserEmailService';

@Injectable()
export class ListUserEmailService implements IListUserEmailService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async execute(email: string): Promise<Partial<IUser> | null> {
    return this.userRepository.findOne({
      select: { id: true, email: true, password: true },
      where: { email },
    });
  }
}
