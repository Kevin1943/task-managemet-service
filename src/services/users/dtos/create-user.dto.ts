import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  // TODO: Adjusts validation
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  firstName: string;
  lastName: string;
}
