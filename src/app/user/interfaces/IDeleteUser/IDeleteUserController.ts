import { IUser } from '../../entity/IUser';

export interface IDeleteUserController {
  handle: (id: string) => Promise<Partial<IUser>>;
}
