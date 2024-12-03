import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';
import { SizesModule } from './sizes/sizes.module';
import { OutfitsModule } from './outfits/outfits.module';
import { StatesModule } from './states/states.module';
import { SeedModule } from './config/database/seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: process.env.SYNC_MIGRATIONS === 'true',
      logging: true,
      entities: [__dirname + '/**/*.entity.{js,ts}'],
    }),
    SeedModule,
    CategoriesModule,
    SizesModule,
    ProductsModule,
    OutfitsModule,
    OrdersModule,
    StatesModule,
  ],
})
export class AppModule { }
