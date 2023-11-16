// import { Injectable, UnauthorizedException } from '@nestjs/common';
// // import users from '../users.json';
// const users = require('../users.json') as { email: string; password: string }[];
// import { AuthDto } from './dto';

// @Injectable()
// export class AuthService {
//   signinLocal(dto: AuthDto) {
//     //Retrieve the user

//     const user = users.find((_user) => _user.email === dto.email);
//     if (!user) throw new UnauthorizedException('Credentials incorrect  ');
//     if (user.password !== dto.password)
//       throw new UnauthorizedException('Credentials incorrect');

//     return user;
//   }
//   signupLocal(dto: AuthDto) {}
// }
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
    if (!user) throw new UnauthorizedException('Credenti  als incorrect ');
    if (user.password !== dto.password)
      throw new UnauthorizedException('Credentials incorrect');

    return user;
  }
  signupLocal(dto: AuthDto) {}

  signUser(userId: number, email: string, type: string) {}
}
