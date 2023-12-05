import { IsDate, IsEnum, IsOptional } from 'class-validator';
import { Transform, TransformFnParams, Type } from 'class-transformer';
import { TaskStatus } from '../entities/task.entity';

export class QueryTaskDto {
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  startDate: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  endDate: Date;

  @IsOptional()
  @Transform(singleItemToArray)
  @IsEnum(TaskStatus, { each: true })
  statuses: TaskStatus[];
}

function singleItemToArray({
  key,
  value,
}: TransformFnParams): string[] | unknown[] | undefined {
  value = JSON.parse(value);
  if (value === undefined || value === null) {
    return undefined;
  }

  if (typeof value === 'string') {
    return [value];
  }

  if (Array.isArray(value)) {
    return value as unknown[];
  }

  throw new Error(`${key} is not a valid string`);
}
