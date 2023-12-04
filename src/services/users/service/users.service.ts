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
    return await this.usersRepository.create({ ...createUserDto });
  }

  async findOneById(id: number) {
    return await this.usersRepository.findOne({
      where: { id },
    });
  }

  async findByUsername(username: string) {
    return await this.usersRepository.findOne({
      where: { username },
    });
  }
}
