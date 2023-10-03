import { CreateUserDTO } from '../../dto/CreateUserDTO';
import { IUser } from '../IUser';

export interface ICreateUserController {
  handle: (createUserDTO: CreateUserDTO) => Promise<IUser>;
}
