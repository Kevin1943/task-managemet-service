import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/services/users/entities/user.entity';

export enum TaskStatus {
  PENDING = 'Pending',
  INPROGRESS = 'In progress',
  COMPLETED = 'Completed',
}

@Table
export class Task extends Model {
  @Column
  title: string;

  @Column
  description: string;

  @Column
  dueDate: Date;

  @Column
  status: TaskStatus;

  @ForeignKey(() => User)
  @Column({ field: 'userId' })
  userId: number; // User ID stored in my Database

  @BelongsTo(() => User)
  user: User;
}
