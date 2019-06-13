import { Service } from "typedi";
import { Connection, EntityRepository, Repository, FindOneOptions, getConnection } from "typeorm";
import Task from "../model/entity/task.entity";
import TaskType from "../model/type/task.type";

@Service()
@EntityRepository(Task)
export default class TaskRepository extends Repository<Task> {
  private connection: Connection;
  constructor() {
    super();
    this.connection = getConnection();
  }

  public async getTaskList(isDone?: boolean) {
    const where: FindOneOptions["where"] = {
      deletedAt: 0
    };
    if (isDone === true || isDone === false) {
      where.isDone = isDone;
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

  public async updateStatusTask(id: number, isDone: boolean) {
    await this.update(id, { isDone });
    return true;
  }

  public async deleteTask(id: number) {
    // await this.delete(id);
    const deletedAt = +String(new Date().getTime()).substring(0, 10);
    await this.update(id, { deletedAt });
    return true;
  }
}