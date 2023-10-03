import { CreateUserDTO } from '../../dto/CreateUserDTO';
import { IUser } from '../IUser';

export interface ICreateUserService {
  execute: (createUserDTO: CreateUserDTO) => Promise<IUser>;
}
