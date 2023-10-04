import { IUser } from '../../entity/IUser';

export interface IListUserEmailService {
  execute: (email: string) => Promise<IUser | null>;
}
