import { Sequelize } from 'sequelize-typescript';
import { Task } from './../../services/tasks/entities/task.entity';
import { User } from 'src/services/users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      // TODO: Adjusts these value to .env
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'dev',
        password: 'password',
        database: 'develop',
      });
      sequelize.addModels([Task, User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
