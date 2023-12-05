import { Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { constant } from 'src/common/constants';
import { User } from './entities/user.entity';

export const usersProviders = [
  {
    provide: constant.USERS_REPOSITORY,
    useValue: User,
  },
];

@Module({
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule {}
