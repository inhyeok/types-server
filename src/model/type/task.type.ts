import { ObjectType, InputType, Field } from "type-graphql";

import Task from "../entity/task.entity";

@ObjectType()
@InputType("TaskInputType")
export default class TaskType implements Partial<Task> {
  @Field()
  title: string;

  @Field()
  description: string;
}
