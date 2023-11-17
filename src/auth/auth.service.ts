import { Injectable, UnauthorizedException } from '@nestjs/common';
// import users from '../users.json';
// eslint-disable-next-line
const users = require('../users.json');

// const users = require('../users.json');

import { AuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  signinLocal(dto: AuthDto) {
    //Retrieve the user

    const user = users.find((_user) => _user.email === dto.email);
    if (!user) throw new UnauthorizedException('Credentials incorrect ');
    if (user.password !== dto.password)
      throw new UnauthorizedException('Credentials incorrect');

    return this.signUser(user.id, user.email, 'user');
  }
  signupLocal(dto: AuthDto) {}

  signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email: email,
      type: type,
    });
  }
}
