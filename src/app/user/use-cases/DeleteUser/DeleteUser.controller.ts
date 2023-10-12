import { Controller, Delete, Inject, Param, UseGuards } from '@nestjs/common';
import { IUser } from '../../entity/IUser';
import { IDeleteUserController } from '../../interfaces/IDeleteUser/IDeleteUserController';
import { IDeleteUserService } from '../../interfaces/IDeleteUser/IDeleteUserService';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class DeleteUserController implements IDeleteUserController {
  constructor(
    @Inject('IDeleteUserService')
    private readonly deleteUserService: IDeleteUserService,
  ) {}

  @Delete(':id')
  handle(@Param('id') id: string): Promise<Partial<IUser>> {
    return this.deleteUserService.execute(id);
  }
}
