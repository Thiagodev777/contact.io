import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { ICreateUserController } from '../../interfaces/ICreateUser/ICreateUserController';
import { ICreateUserService } from '../../interfaces/ICreateUser/ICreateUserService';
import { CreateUserDTO } from '../../dto/CreateUserDTO';
import { IUser } from '../../interfaces/IUser';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@UseGuards(AuthGuard('jwt'))
export class CreateUserController implements ICreateUserController {
  constructor(
    @Inject('ICreateUserService')
    private readonly createUserService: ICreateUserService,
  ) {}

  @Post()
  async handle(@Body() createUserDTO: CreateUserDTO): Promise<IUser> {
    return this.createUserService.execute(createUserDTO);
  }
}
