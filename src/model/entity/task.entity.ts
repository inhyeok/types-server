import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import { TaskType } from "../type/task.type";

import { Comment } from "./comment.entity";

@Entity()
@ObjectType({ description: "Task Type" })
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

  @OneToMany(type => Comment, comment => comment.task)
  comments: Comment[];
}
