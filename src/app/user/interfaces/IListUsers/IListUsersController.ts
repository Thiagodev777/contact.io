import { IUser } from '../../entity/IUser';

export interface IListUsersController {
  handle: () => Promise<IUser[]>;
}
