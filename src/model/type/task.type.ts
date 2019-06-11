import { Column } from "typeorm";
import { ObjectType, InputType, Field } from "type-graphql";

@ObjectType()
@InputType("TaskInputType")
export class TaskType {
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
