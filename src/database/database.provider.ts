import { Sequelize } from 'sequelize-typescript';
import { Task } from '../task/entities/task.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([Task]);
      await sequelize.sync();
      return sequelize;
    },
  }