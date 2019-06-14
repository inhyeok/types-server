import { ObjectType, InputType, Field } from "type-graphql";

import Comment from "../entity/comment.entity";

@ObjectType()
@InputType("CommentInputType")
export default class CommentType implements Partial<Comment>{
  @Field()
  comment: string;
}
