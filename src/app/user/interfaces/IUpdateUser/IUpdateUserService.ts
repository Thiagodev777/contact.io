import { UpdateUserDTO } from '../../dto/UpdateUserDTO';
import { IUser } from '../../entity/IUser';

export interface IUpdateUserService {
  execute: (
    id: string,
    updateUserDTO: UpdateUserDTO,
  ) => Promise<Partial<IUser>>;
}
