import { IUser } from '../IUser';

export interface IListUsersService {
  execute: () => Promise<IUser[]>;
}
