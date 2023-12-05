import { Module } from '@nestjs/common';

import { TasksModule } from './services/tasks/task.module';
import { UsersModule } from './services/users/user.module';
import { AuthModule } from './services/auth/auth.module';
import { DatabaseModule } from './integrations/database/database.module';

@Module({
  imports: [DatabaseModule, TasksModule, AuthModule, UsersModule],
})
export class AppModule {}
