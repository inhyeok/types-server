import { Service } from "typedi";
import { Connection, EntityRepository, Repository, FindOneOptions, getConnection } from "typeorm";
import Comment from "../model/entity/comment.entity";
import CommentType from "../model/type/comment.type";

@Service()
@EntityRepository(Comment)
export default class CommentRepository extends Repository<Comment> {
  private connection: Connection;
  constructor() {
    super();
    this.connection = getConnection();
  }
  public async getTaskCommentList(taskId: number) {
    const where: FindOneOptions["where"] = {
      taskId,
      deletedAt: 0
    };
    return this.find({
      where
    });
  }

  public async insertComment(taskId: number, comment: string) {
    const result = this.create({
      taskId,
      comment,
    });
    return this.save(result);
  }

  public async updateComment(id: number, comment: string) {
    await this.update(id, {
      comment,
    });
    return true;
  }

  public async deleteComment(id: number) {
    // await this.delete(id);
    const deletedAt = +String(new Date().getTime()).substring(0, 10);
    await this.update(id, { deletedAt });
    return true;
  }

  public async pinComment(id: number, isPin: boolean) {
    await this.update(id, {
      isPin
    });
    return true;
  }
}