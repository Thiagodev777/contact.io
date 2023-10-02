import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ICreateUserController } from '../../interfaces/ICreateUserController';
import { ICreateUserService } from '../../interfaces/ICreateUserService';
import { CreateUserDTO } from '../../dto/CreateUserDTO';

@Controller()
export class CreateUserController implements ICreateUserController {
  constructor(
    @Inject('ICreateUserService')
    private readonly createUserService: ICreateUserService,
  ) {}

  @Post()
  async handle(@Body() { name, email, password, age, city }: CreateUserDTO) {
    return this.createUserService.execute({ name, email, password, age, city });
  }
}
