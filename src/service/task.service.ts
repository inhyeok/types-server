import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";

import TaskRepository from "../repository/task.repository";

import TaskType from "../model/type/task.type";

@Service()
export default class TaskService {
  @InjectRepository() private readonly taskRepository: TaskRepository;

  getTaskList(isDone?: boolean) {
    return this.taskRepository.getTaskList(isDone);
  }

  insertTask(data: TaskType) {
    return this.taskRepository.insertTask(data);
  }

  updateTask(id: number, data: TaskType) {
    return this.taskRepository.updateTask(id, data);
  }

  updateStatusTask(id: number, isDone: boolean) {
    return this.taskRepository.updateStatusTask(id, isDone);
  }

  deleteTask(id: number) {
    return this.taskRepository.deleteTask(id);
  }
}
