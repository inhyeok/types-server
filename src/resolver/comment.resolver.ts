import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { Comment } from "../model/entity/comment.entity";

@Resolver(type => Comment)
export class CommentResolver {
  @Mutation(type => Boolean)
  insertComment(
    @Arg("taskId", type => Int, { nullable: false }) taskId: number,
    @Arg("comment", type => String, { nullable: false }) comment: string,
  ) {
    return true;
  }
}