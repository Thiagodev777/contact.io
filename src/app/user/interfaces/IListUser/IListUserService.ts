import { IUser } from '../../entity/IUser';

export interface IListUserService {
  execute: (id: string) => Promise<Partial<IUser>>;
}
