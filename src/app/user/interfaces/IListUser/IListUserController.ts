import { IUser } from '../../entity/IUser';

export interface IListUserController {
  handle: (id: string) => Promise<Partial<IUser>>;
}
