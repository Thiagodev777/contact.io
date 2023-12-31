import { IUser } from '../../entity/IUser';

export interface IListUsersService {
  execute: () => Promise<Partial<IUser[]>>;
}
