import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { UsersService } from './../services/users/service/users.service';

@Injectable()
export class DoesUserExist implements CanActivate {
  constructor(private readonly userService: UsersService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  async validateRequest(request) {
    const userExist = await this.userService.findByUsername(
      request.body.username,
    );
    console.log(
      '🚀 ~ file: doesUserExist.guard.ts:26 ~ DoesUserExist ~ validateRequest ~ userExist:',
      userExist,
    );
    if (userExist) {
      throw new ForbiddenException('This username already exist');
    }
    return true;
  }
}
