import { CreateUserDTO } from '../../dto/CreateUserDTO';
import { IUser } from '../../entity/IUser';

export interface ICreateUserController {
  handle: (createUserDTO: CreateUserDTO) => Promise<IUser>;
}
