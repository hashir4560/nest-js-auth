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
<<<<<<< Updated upstream
import { Injectable, UnauthorizedException } from '@nestjs/common';
// import users from '../users.json';
const users = require('../users.json');
=======

import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as path from 'path';
const usersPath = path.resolve(__dirname, '../users.json');
const users = require(usersPath) as { email: string; password: string }[];
>>>>>>> Stashed changes
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  signinLocal(dto: AuthDto) {
    const user = users.find((_user) => _user.email === dto.email);
    if (!user) throw new UnauthorizedException('Credentials incorrect ');
    if (user.password !== dto.password)
      throw new UnauthorizedException('Credentials incorrect');
    return user;
  }

  signupLocal(dto: AuthDto) {
    // Implement signup logic if needed
  }
}
