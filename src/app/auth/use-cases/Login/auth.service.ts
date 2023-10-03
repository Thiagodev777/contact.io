import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { ListUserEmailService } from 'src/app/user/use-cases/ListUserEmail/ListUserEmail.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly listUserEmailService: ListUserEmailService,
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
