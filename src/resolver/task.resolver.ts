import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Task } from "../model/entity/task.entity";
import TaskService from "../service/task.service";
import { TaskType } from "../model/type/task.type";

@Resolver()
class TaskResolver {
  constructor() {}

  @Query(returns => [Task])
  async getTaskList(
    @Arg("is_done", type => Boolean, { nullable: true }) is_done?: boolean
  ) {
    const taskService = new TaskService();
    return taskService.getTaskList(is_done);
  }

  @Mutation(type => Task)
  async insertTask(
    @Arg("data", type => TaskType, { nullable: false }) data: TaskType
  ) {
    const taskService = new TaskService();
    return taskService.insertTask(data);
  }

  @Mutation(type => Boolean)
  async updateTask(
    @Arg("id", type => Number, { nullable: false }) id: number,
    @Arg("data", type => TaskType, { nullable: false }) data: TaskType
  ) {
    const taskService = new TaskService();
    return taskService.updateTask(id, data);
  }

  @Mutation(type => Boolean)
  async updateStatusTask(
    @Arg("id", type => Number, { nullable: false }) id: number,
    @Arg("is_done", type => Boolean, { nullable: false }) is_done: boolean
  ) {
    const taskService = new TaskService();
    return taskService.updateStatusTask(id, is_done);
  }

  @Mutation(type => Boolean)
  async deleteTask(
    @Arg("id", type => Number, { nullable: false }) id: number
  ) {
    const taskService = new TaskService();
    return taskService.deleteTask(id);
  }
}
