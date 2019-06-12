import { Resolver, Query, Mutation, Arg, Int, FieldResolver, Root } from "type-graphql";
import { Task } from "../model/entity/task.entity";
import { TaskType } from "../model/type/task.type";

import TaskService from "../service/task.service";
import CommentService from "../service/comment.service";
import { Comment } from "../model/entity/comment.entity";

@Resolver(type => Task)
class TaskResolver {
  @Query(returns => [Task])
  async getTaskList(
    @Arg("isDone", type => Boolean, { nullable: true }) isDone?: boolean
  ) {
    const taskService = new TaskService();
    return taskService.getTaskList(isDone);
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
    @Arg("id", type => Int, { nullable: false }) id: number,
    @Arg("data", type => TaskType, { nullable: false }) data: TaskType
  ) {
    const taskService = new TaskService();
    return taskService.updateTask(id, data);
  }

  @Mutation(type => Boolean)
  async updateStatusTask(
    @Arg("id", type => Int, { nullable: false }) id: number,
    @Arg("isDone", type => Boolean, { nullable: false }) isDone: boolean
  ) {
    const taskService = new TaskService();
    return taskService.updateStatusTask(id, isDone);
  }

  @Mutation(type => Boolean)
  async deleteTask(
    @Arg("id", type => Int, { nullable: false }) id: number
  ) {
    const taskService = new TaskService();
    return taskService.deleteTask(id);
  }

  @FieldResolver(returns => [Comment])
  comments(@Root() task: Task): Promise<Comment[]> {
    const commentService = new CommentService();
    return commentService.getTaskCommentList(task.id);
  }
}
