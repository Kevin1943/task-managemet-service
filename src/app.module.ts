import { Module } from '@nestjs/common';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TasksModule } from './services/tasks/task.module';
import { UsersModule } from './services/users/user.module';
import { AuthModule } from './services/auth/auth.module';
import { DatabaseModule } from './integrations/database/database.module';

@Module({
  imports: [DatabaseModule, TasksModule, AuthModule, UsersModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
