import { IUser } from '../../entity/IUser';

export interface IDeleteUserService {
  execute: (id: string) => Promise<Partial<IUser>>;
}
