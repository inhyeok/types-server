import { Service } from "typedi";
import { EntityRepository, Repository, FindOneOptions } from "typeorm";
import { Task } from "../model/entity/task.entity";
import { TaskType } from "../model/type/task.type";

// @Service()
@EntityRepository(Task)
export default class TaskRepository extends Repository<Task> {
  public async getTaskList(is_done?: boolean) {
    const where: FindOneOptions["where"] = {
      deleted_at: 0
    };
    if (is_done === true || is_done === false) {
      where.is_done = is_done;
    }
    return this.find({
      where
    });
  }

  public async insertTask(data: TaskType) {
    const result = this.create(data);
    return this.save(result);
  }

  public async updateTask(id: number, data: TaskType) {
    await this.update(id, data);
    return true;
  }

  public async updateStatusTask(id: number, is_done: boolean) {
    await this.update(id, { is_done });
    return true;
  }

  public async deleteTask(id: number) {
    // await this.delete(id);
    const deleted_at = +String(new Date().getTime()).substring(0, 10);
    await this.update(id, { deleted_at });
    return true;
  }
}