import { IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../entities/task.entity';

export class CreateTaskDto {
  // TODO: Adjusts validation
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  dueDate: string;

  // @IsNotEmpty()
  status: TaskStatus;
}
