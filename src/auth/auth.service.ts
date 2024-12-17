import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/auth.dto';
import { UserPayload } from './dto/user-payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(loginDto: LoginDto) {
    const user = await this.userService.findByUsername(loginDto.username);
    if (user && (await bcrypt.compare(loginDto.password, user.password))) {
      const { password, createdAt, ...result } = user; // Exclude password
      return { ...result, role: 'User' } as UserPayload;
    }
    return null;
  }

  async login(payload: UserPayload) {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
