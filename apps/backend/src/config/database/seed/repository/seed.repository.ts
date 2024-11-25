import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class SeedRepository {
  constructor(
    private readonly dataSource: DataSource,


  ) { }

  async run(body: any) {
    // await this.dataSource.query(`DELETE FROM products`);
    // await this.dataSource.query(`DELETE FROM outfits`);
    // await this.dataSource.query(`DELETE FROM sizes`);
    // await this.dataSource.query(`DELETE FROM categories`);
  }

}
