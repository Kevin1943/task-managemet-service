import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { constant } from '../../../common/constants';
import { Task, TaskStatus } from '../entities/task.entity';
import { User } from 'src/services/users/entities/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @Inject(constant.TASKS_REPOSITORY)
    private tasksRepository: typeof Task,
  ) {}

  private async validateOwner(task: Task, user: User) {
    if (!task) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    if (task.userId != user.id) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    return true;
  }

  async create(createTaskDto: CreateTaskDto, user: User) {
    return await this.tasksRepository.create({
      ...createTaskDto,
      status: TaskStatus.PENDING,
      userId: user.id,
    });
  }

  async findAll(user: User) {
    return await this.tasksRepository.findAll({ where: { userId: user.id } });
  }

  async findOne(id: number, user: User) {
    const task = await this.tasksRepository.findOne({ where: { id } });
    await this.validateOwner(task, user);
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto, user: User) {
    const task = await this.tasksRepository.findOne({ where: { id } });
    await this.validateOwner(task, user);
    return await this.tasksRepository.update(
      { ...updateTaskDto },
      { where: { id }, returning: true },
    );
  }

  async remove(id: number, user: User) {
    const task = await this.tasksRepository.findOne({ where: { id } });
    await this.validateOwner(task, user);
    return await this.tasksRepository.destroy({ where: { id } });
  }
}
