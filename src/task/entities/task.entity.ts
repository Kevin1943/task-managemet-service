import { Table, Column, Model } from 'sequelize-typescript';

// title, description, due date, status (e.g., "pending",  "in progress", "completed"),

export enum BookFormat {
  HARDCOVER = 'hardcover',
  PAPERBACK = 'paperback',
  DIGITAL = 'digital',
}

@Table
export class Task extends Model {
//   @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column
  title: string;

  @Column
  description: string;

  @Column
  dueDate: Date;

  @Column
  status: Date;
}
