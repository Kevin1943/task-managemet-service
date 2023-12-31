import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { TasksService } from '../../services/tasks/service/tasks.service';
import { CreateTaskDto } from '../../services/tasks/dtos/create-task.dto';
import { UpdateTaskDto } from '../../services/tasks/dtos/update-task.dto';
import { AuthGuard } from '@nestjs/passport';
import { QueryTaskDto } from 'src/services/tasks/dtos/query-params-task-dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Request() req, @Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto, req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Request() req, @Query() query: QueryTaskDto) {
    return this.tasksService.findAll(req.user, query);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.tasksService.findOne(+id, req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(+id, updateTaskDto, req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.tasksService.remove(+id, req.user);
  }
}
