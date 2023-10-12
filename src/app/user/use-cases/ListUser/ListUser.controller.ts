import { Controller, Get, Inject, Param, UseGuards } from '@nestjs/common';
import { IListUserController } from '../../interfaces/IListUser/IListUserController';
import { IListUserService } from '../../interfaces/IListUser/IListUserService';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class ListUserController implements IListUserController {
  constructor(
    @Inject('IListUserService')
    private readonly listUserService: IListUserService,
  ) {}

  @Get(':id')
  handle(@Param('id') id: string) {
    return this.listUserService.execute(id);
  }
}
