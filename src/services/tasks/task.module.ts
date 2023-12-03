import { Module } from '@nestjs/common';
import { TasksService } from './service/tasks.service';
import { TasksController } from './../../controllers/tasks/tasks.controller';
import { constant } from 'src/common/constants';
import { Task } from './entities/task.entity';

export const tasksProviders = [
  {
    provide: constant.TASKS_REPOSITORY,
    useValue: Task,
  },
];

@Module({
  controllers: [TasksController],
  providers: [TasksService, ...tasksProviders],
})
export class TasksModule {}
