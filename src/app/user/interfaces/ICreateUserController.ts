import { CreateUserDTO } from '../dto/CreateUserDTO';

export interface ICreateUserController {
  handle: (createUserDTO: CreateUserDTO) => void;
}
