import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { msg: 'singup' };
  }

  signin() {
    return { msg: 'signin' };
  }
}
