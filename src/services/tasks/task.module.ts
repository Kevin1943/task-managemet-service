import { Module } from '@nestjs/common';
import { TasksService } from './service/tasks.service';
import { TasksController } from './../../controllers/tasks/tasks.controller';
import { DatabaseModule } from '../../integrations/database/database.module';
import { constant } from 'src/common/constants';
import { Task } from './entities/task.entity';

export const catsProviders = [
  {
    provide: constant.TASKS_REPOSITORY,
    useValue: Task,
  },
];

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [TasksService, ...catsProviders],
})
export class TasksModule {}
