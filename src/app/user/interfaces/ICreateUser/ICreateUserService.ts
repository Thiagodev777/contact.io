import { CreateUserDTO } from '../../dto/CreateUserDTO';
import { IUser } from '../../entity/IUser';

export interface ICreateUserService {
  execute: (createUserDTO: CreateUserDTO) => Promise<IUser>;
}
