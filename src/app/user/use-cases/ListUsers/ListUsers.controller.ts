import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { IListUsersService } from '../../interfaces/IListUsers/IListUsersService';
import { IUser } from '../../interfaces/IUser';
import { IListUsersController } from '../../interfaces/IListUsers/IListUsersController';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
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
