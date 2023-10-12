import { IUser } from '../../entity/IUser';

export interface IListUserEmailController {
  handle: (email: string) => Promise<Partial<IUser>>;
}
