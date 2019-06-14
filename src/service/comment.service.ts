import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";

import CommentRepository from "../repository/comment.repository";

@Service()
export default class CommentService {
  @InjectRepository() private readonly commentRepository: CommentRepository;

  getTaskCommentList(taskId: number) {
    return this.commentRepository.getTaskCommentList(taskId);
  }

  insertComment(taskId: number, comment: string) {
    return this.commentRepository.insertComment(taskId, comment);
  }

  updateComment(id: number, comment: string) {
    return this.commentRepository.updateComment(id, comment);
  }

  deleteComment(id: number) {
    return this.commentRepository.deleteComment(id);
  }

  pinComment(id: number, isPin: boolean) {
    return this.commentRepository.pinComment(id, isPin);
  }
}
