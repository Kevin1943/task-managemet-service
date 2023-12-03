import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from '../../services/auth/service/auth.service';
import { CreateUserDto } from '../../services/users/dtos/create-user.dto';
import { DoesUserExist } from './../../guards/doesUserExist.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  async signin(@Request() req) {
    return await this.authService.signin(req.user);
  }

  @UseGuards(DoesUserExist)
  @Post('signup')
  async signUp(@Body() user: CreateUserDto) {
    return await this.authService.create(user);
  }
}
