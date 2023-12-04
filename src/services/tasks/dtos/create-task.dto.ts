import { IsNotEmpty, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTaskDto {
  // TODO: Adjusts validation
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  dueDate: Date;
  /*example for duedate format : "YYYY/MM/DD" */
}
