import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

import Task from "./task.entity";

@Entity()
@ObjectType({ description: "Task Comment Type" })
export default class Comment {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  @Field(type => Int!)
  id: number;

  @Column({
    type: "int",
    width: 10,
    unsigned: true,
    nullable: false,
    default: 0,
  })
  @Field(type => Int!)
  taskId: number;

  @Column({
    type: "boolean",
    nullable: false,
    default: false,
  })
  @Field()
  isPin: boolean;

  @Column({
    type: "text",
    nullable: false,
  })
  @Field()
  comment: string;

  @Column({
    type: "int",
    width: 10,
    unsigned: true,
    nullable: false,
    default: 0,
  })
  @Field()
  deletedAt: number;

  @ManyToOne(type => Task, task => task.comments)
  task: Task;
}
