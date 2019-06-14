import { Inject } from "typedi";
import { Resolver, Query, Mutation, Arg, Int, FieldResolver, Root } from "type-graphql";

import TaskService from "../service/task.service";
import CommentService from "../service/comment.service";

import Comment from "../model/entity/comment.entity";
import Task from "../model/entity/task.entity";
import TaskType from "../model/type/task.type";

@Resolver(type => Task)
class TaskResolver {
  @Inject() private readonly taskService: TaskService;
  @Inject() private readonly commentService: CommentService;

  @Query(returns => [Task])
  async getTaskList(
    @Arg("isDone", type => Boolean, { nullable: true }) isDone?: boolean,
  ) {
    return this.taskService.getTaskList(isDone);
  }

  @Mutation(type => Task)
  async insertTask(
    @Arg("data", type => TaskType, { nullable: false }) data: TaskType,
  ) {
    return this.taskService.insertTask(data);
  }

  @Mutation(type => Boolean)
  async updateTask(
    @Arg("id", type => Int, { nullable: false }) id: number,
    @Arg("data", type => TaskType, { nullable: false }) data: TaskType,
  ) {
    return this.taskService.updateTask(id, data);
  }

  @Mutation(type => Boolean)
  async updateStatusTask(
    @Arg("id", type => Int, { nullable: false }) id: number,
    @Arg("isDone", type => Boolean, { nullable: false }) isDone: boolean,
  ) {
    return this.taskService.updateStatusTask(id, isDone);
  }

  @Mutation(type => Boolean)
  async deleteTask(
    @Arg("id", type => Int, { nullable: false }) id: number,
  ) {
    return this.taskService.deleteTask(id);
  }

  @FieldResolver(returns => [Comment])
  comments(@Root() task: Task): Promise<Comment[]> {
    return this.commentService.getTaskCommentList(task.id);
  }
}
