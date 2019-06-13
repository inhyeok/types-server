import { Column } from "typeorm";
import { ObjectType, InputType, Field } from "type-graphql";

@ObjectType()
@InputType("CommentInputType")
export default class CommentType {
  @Column({
    type: "text",
    nullable: false
  })
  @Field()
  comment: string;
}