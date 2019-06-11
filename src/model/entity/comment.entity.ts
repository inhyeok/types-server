import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import { CommentType } from "../type/comment.type";
import { Task } from "./task.entity";

@Entity()
@ObjectType({ description: "Task Comment Type" })
export class Comment extends CommentType {
  @PrimaryGeneratedColumn({
    unsigned: true
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
  task_id: number;

  @Column({
    type: "boolean",
    nullable: false,
    default: false
  })
  @Field()
  is_pin: boolean;

  @Column({
    type: "int",
    width: 10,
    unsigned: true,
    nullable: false,
    default: 0,
  })
  @Field()
  deleted_at: number;

  @ManyToOne(type => Task, task => task.comments)
  task: Task;
}
