import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { constant } from 'src/common/constants';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(constant.USERS_REPOSITORY)
    private usersRepository: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    console.log(
      '🚀 ~ file: users.service.ts:14 ~ UsersService ~ create ~ createUserDto:',
      createUserDto,
    );
    return await this.usersRepository.create({ ...createUserDto });
  }

  async findOneById(id: number) {
    console.log(
      '🚀 ~ file: users.service.ts:22 ~ UsersService ~ findOneById ~ id:',
      id,
    );

    return await this.usersRepository.findOne({
      where: { id },
    });
  }

  async findByUsername(username: string) {
    console.log(
      '🚀 ~ file: users.service.ts:19 ~ UsersService ~ findByUsername ~ username:',
      username,
    );

    return await this.usersRepository.findOne({
      where: { username },
    });
  }
}
