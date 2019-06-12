import { Service } from "typedi";
import { EntityRepository, Repository, FindOneOptions } from "typeorm";
import { Comment } from "../model/entity/comment.entity";
import { CommentType } from "../model/type/comment.type";

// @Service()
@EntityRepository(Comment)
export default class CommentRepository extends Repository<Comment> {
  public async getTaskCommentList(taskId: number) {
    const where: FindOneOptions["where"] = {
      taskId,
      deletedAt: 0
    };
    return this.find({
      where
    });
  }

  public async insertComment(data: CommentType) {
    const result = this.create(data);
    return this.save(result);
  }

  public async updateComment(id: number, data: CommentType) {
    await this.update(id, data);
    return true;
  }

  public async deleteComment(id: number) {
    // await this.delete(id);
    const deletedAt = +String(new Date().getTime()).substring(0, 10);
    await this.update(id, { deletedAt });
    return true;
  }
}