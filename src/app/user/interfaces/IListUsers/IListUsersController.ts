import { IUser } from '../IUser';

export interface IListUsersController {
  handle: () => Promise<IUser[]>;
}
