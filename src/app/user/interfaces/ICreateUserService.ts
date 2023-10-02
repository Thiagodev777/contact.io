import { CreateUserDTO } from '../dto/CreateUserDTO';

export interface ICreateUserService {
  execute: (createUserDTO: CreateUserDTO) => void;
}
