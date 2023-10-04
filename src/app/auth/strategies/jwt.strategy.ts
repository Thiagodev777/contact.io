import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      IgnoreExpiration: true,
      secretOrKey: process.env.JWT_PRIVATE_KEY,
    });
  }

  validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}
