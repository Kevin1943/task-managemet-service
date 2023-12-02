import { Table, Column, Model } from 'sequelize-typescript';

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
}
