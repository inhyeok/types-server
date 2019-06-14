import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

import Comment from "./comment.entity";

@Entity()
@ObjectType({ description: "Task Type" })
export default class Task {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  @Field(type => Int!)
  id: number;

  @Column({
    type: "boolean",
    nullable: false,
    default: false,
  })
  @Field()
  isDone: boolean;

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

  @Column({
    type: "int",
    width: 10,
    unsigned: true,
    nullable: false,
    default: 0,
  })
  deletedAt: number;

  @OneToMany(type => Comment, comment => comment.task)
  comments: Comment[];
}
