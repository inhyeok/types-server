import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import { TaskType } from "../type/task.type";

@Entity()
@ObjectType({ description: "TaskList" })
export class Task extends TaskType {
  @PrimaryGeneratedColumn({
    unsigned: true
  })
  @Field(type => Int!)
  id: number;

  @Column({
    type: "boolean",
    nullable: false,
    default: false,
  })
  @Field()
  is_done: boolean;

  @Column({
    type: "int",
    width: 10,
    unsigned: true,
    nullable: false,
    default: 0,
  })
  @Field()
  deleted_at: number;
}
