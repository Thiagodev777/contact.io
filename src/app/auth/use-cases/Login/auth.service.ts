import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { IListUserEmailService } from 'src/app/user/interfaces/IListUserEmail/IListUserEmailService';

@Injectable()
export class AuthService {
  constructor(
    @Inject('IListUserEmailService')
    private readonly listUserEmailService: IListUserEmailService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.listUserEmailService.execute(email);
    if (!user) return null;

    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }

  async login(user) {
    const payload = { sub: user.id, email: user.email };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
