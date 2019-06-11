import { Column } from "typeorm";
import { ObjectType, InputType, Field } from "type-graphql";

@ObjectType()
@InputType("CommentInputType")
export class CommentType {
  @Column({
    type: "text",
    nullable: false
  })
  @Field()
  message: string;
}