/* eslint-disable import/no-unresolved */
import { Pool } from 'mysql2/promise';

interface Plants {
  id?: number;
  breed: string;
  size: number;
  needsSun: boolean;
  origin: string;
}

export default class Plantmodel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Plants[]> {
    const result = await this.connection
      .execute('SELECT * from PlantsData.Plants');
    const [rows] = result;
    return rows as Plants[];
  }
}