import { Service } from "typedi";
import { getCustomRepository } from "typeorm";

import CommentRepository from "../repository/comment.repository";
import { CommentType } from "../model/type/comment.type";

// @Service()
export default class CommentService {
  constructor() {}

  getTaskCommentList(taskId: number) {
    const commentRepository = getCustomRepository(CommentRepository);
    return commentRepository.getTaskCommentList(taskId);
  }

  insertComment(data: CommentType) {
    const commentRepository = getCustomRepository(CommentRepository);
    return commentRepository.insertComment(data);
  }

  updateComment(id: number, data: CommentType) {
    const commentRepository = getCustomRepository(CommentRepository);
    return commentRepository.updateComment(id, data);
  }

  deleteComment(id: number) {
    const commentRepository = getCustomRepository(CommentRepository);
    return commentRepository.deleteComment(id);
  }
}