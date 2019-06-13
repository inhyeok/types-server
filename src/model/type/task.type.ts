import { Column } from "typeorm";
import { ObjectType, InputType, Field } from "type-graphql";
import Task from "../entity/task.entity";
import Comment from "../entity/comment.entity";

@ObjectType()
@InputType("TaskInputType")
export default class TaskType {
  @Column({
    type: "char",
    length: 30,
    nullable: false,
    default: "",
  })
  @Field()
  title: string;

  @Column({
    type: "text",
    nullable: false,
  })
  @Field()
  description: string;
}
