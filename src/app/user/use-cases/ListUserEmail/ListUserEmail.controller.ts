import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ListUserEmailService } from './ListUserEmail.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class ListUserEmailController {
  constructor(private readonly listUserEmailService: ListUserEmailService) {}

  @Get(':email')
  async handle(@Param('email') email: string) {
    return this.listUserEmailService.execute(email);
  }
}
