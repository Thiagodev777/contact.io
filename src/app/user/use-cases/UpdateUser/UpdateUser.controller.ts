import {
  Body,
  Controller,
  Inject,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { IUpdateUserController } from '../../interfaces/IUpdateUser/IUpdateUserController';
import { UpdateUserService } from './UpdateUser.service';
import { UpdateUserDTO } from '../../dto/UpdateUserDTO';
import { IUser } from '../../entity/IUser';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@UseGuards(AuthGuard('jwt'))
export class UpdateUserController implements IUpdateUserController {
  constructor(
    @Inject('IUpdateUserService')
    private readonly updateUserService: UpdateUserService,
  ) {}

  @Patch(':id')
  async handle(
    @Param('id') id: string,
    @Body() updateUserDTO: UpdateUserDTO,
  ): Promise<Partial<IUser>> {
    return this.updateUserService.execute(id, updateUserDTO);
  }
}
