import { Inject } from "typedi";
import { Resolver, Mutation, Arg, Int } from "type-graphql";

import CommentService from "../service/comment.service";

import Comment from "../model/entity/comment.entity";

@Resolver(type => Comment)
export class CommentResolver {
  @Inject() private readonly commentService: CommentService;

  @Mutation(type => Comment)
  insertComment(
    @Arg("taskId", type => Int, { nullable: false }) taskId: number,
    @Arg("comment", type => String, { nullable: false }) comment: string,
  ) {
    return this.commentService.insertComment(taskId, comment);
  }

  @Mutation(type => Boolean)
  updateComment(
    @Arg("id", type => Int, { nullable: false }) id: number,
    @Arg("comment", type => String, { nullable: false }) comment: string,
  ) {
    return this.commentService.updateComment(id, comment);
  }

  @Mutation(type => Boolean)
  deleteComment(
    @Arg("id", type => Int, { nullable: false }) id: number,
  ) {
    return this.commentService.deleteComment(id);
  }

  @Mutation(type => Boolean)
  pinComment(
    @Arg("id", type => Int, { nullable: false }) id: number,
    @Arg("isPin", type => Boolean, { nullable: false }) isPin: boolean,
  ) {
    return this.commentService.pinComment(id, isPin);
  }
}