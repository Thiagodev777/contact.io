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
  async handle(@Body() createUserDTO: CreateUserDTO) {
    return this.createUserService.execute(createUserDTO);
  }
}
