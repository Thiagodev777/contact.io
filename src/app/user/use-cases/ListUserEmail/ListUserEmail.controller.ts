import { Controller, Get, Inject, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IListUserEmailController } from '../../interfaces/IListUserEmail/IListUserEmailController';
import { IListUserEmailService } from '../../interfaces/IListUserEmail/IListUserEmailService';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class ListUserEmailController implements IListUserEmailController {
  constructor(
    @Inject('IListUserEmailService')
    private readonly listUserEmailService: IListUserEmailService,
  ) {}

  @Get(':email')
  async handle(@Param('email') email: string) {
    return this.listUserEmailService.execute(email);
  }
}
