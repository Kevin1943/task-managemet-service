import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from '../../services/users/service/users.service';
import { CreateUserDto } from '../../services/users/dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
