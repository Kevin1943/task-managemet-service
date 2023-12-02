import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { constant } from '../../../common/constants';
import { Task } from '../entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @Inject(constant.TASKS_REPOSITORY)
    private tasksRepository: typeof Task,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll() {
    return this.tasksRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
