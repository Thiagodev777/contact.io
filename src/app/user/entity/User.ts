import { v4 } from 'uuid';
import { IUser } from '../interfaces/IUser';

export class User implements IUser {
  public readonly id: string;
  public readonly name: string;
  public readonly email: string;
  public readonly password: string;
  public readonly city: string;
  public readonly age: number;
  public readonly created_at: Date;

  constructor(
    name: string,
    email: string,
    password: string,
    city: string,
    age: number,
  ) {
    this.id = v4() ?? this.id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.city = city;
    this.age = age;
    this.created_at = new Date();
  }
}
