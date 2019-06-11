import { Service } from "typedi";
import { getCustomRepository } from "typeorm";

import TaskRepository from "../repository/task.repository";
import { TaskType } from "../model/type/task.type";

// @Service()
export default class TaskService {
  constructor() {}

  getTaskList(is_done?: boolean) {
    const taskRepository = getCustomRepository(TaskRepository);
    return taskRepository.getTaskList(is_done);
  }

  insertTask(data: TaskType) {
    const taskRepository = getCustomRepository(TaskRepository);
    return taskRepository.insertTask(data);
  }

  updateTask(id: number, data: TaskType) {
    const taskRepository = getCustomRepository(TaskRepository);
    return taskRepository.updateTask(id, data);
  }

  updateStatusTask(id: number, is_done: boolean) {
    const taskRepository = getCustomRepository(TaskRepository);
    return taskRepository.updateStatusTask(id, is_done);
  }

  deleteTask(id: number) {
    const taskRepository = getCustomRepository(TaskRepository);
    return taskRepository.deleteTask(id);
  }
}