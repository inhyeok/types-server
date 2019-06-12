import { Service } from "typedi";
import { getCustomRepository } from "typeorm";

import TaskRepository from "../repository/task.repository";
import { TaskType } from "../model/type/task.type";

// @Service()
export default class TaskService {
  constructor() {}

  getTaskList(isDone?: boolean) {
    const taskRepository = getCustomRepository(TaskRepository);
    return taskRepository.getTaskList(isDone);
  }

  insertTask(data: TaskType) {
    const taskRepository = getCustomRepository(TaskRepository);
    return taskRepository.insertTask(data);
  }

  updateTask(id: number, data: TaskType) {
    const taskRepository = getCustomRepository(TaskRepository);
    return taskRepository.updateTask(id, data);
  }

  updateStatusTask(id: number, isDone: boolean) {
    const taskRepository = getCustomRepository(TaskRepository);
    return taskRepository.updateStatusTask(id, isDone);
  }

  deleteTask(id: number) {
    const taskRepository = getCustomRepository(TaskRepository);
    return taskRepository.deleteTask(id);
  }
}