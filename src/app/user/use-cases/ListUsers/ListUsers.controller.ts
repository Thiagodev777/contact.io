import { Controller, Get, Inject } from '@nestjs/common';
import { IListUsersService } from '../../interfaces/IListUsers/IListUsersService';
import { IUser } from '../../interfaces/IUser';
import { IListUsersController } from '../../interfaces/IListUsers/IListUsersController';

@Controller('users')
export class ListUsersController implements IListUsersController {
  constructor(
    @Inject('IListUsersService')
    private readonly listUsersService: IListUsersService,
  ) {}

  @Get()
  handle(): Promise<IUser[]> {
    return this.listUsersService.execute();
  }
}
