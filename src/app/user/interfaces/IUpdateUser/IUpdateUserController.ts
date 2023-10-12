import { UpdateUserDTO } from '../../dto/UpdateUserDTO';
import { IUser } from '../../entity/IUser';

export interface IUpdateUserController {
  handle: (id: string, updateUserDTO: UpdateUserDTO) => Promise<Partial<IUser>>;
}
