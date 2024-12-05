import { Module } from '@nestjs/common';
import { ProductsModule } from '../products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OrdersModule } from '../orders/orders.module';
import { CategoriesModule } from '../categories/categories.module';
import { SizesModule } from '../sizes/sizes.module';
import { OutfitsModule } from '../outfits/outfits.module';
import { StatesModule } from '../states/states.module';
import { SeedModule } from '../config/database/seed/seed.module';
import DatabaseConfigModule from '../config/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SeedModule,
    SizesModule,
    OrdersModule,
    StatesModule,
    OutfitsModule,
    ProductsModule,
    CategoriesModule,
    DatabaseConfigModule,
  ]
})

export class AppModule {
  static PORT: number;

  constructor(private configService: ConfigService) {
    AppModule.PORT = this.configService.get('PORT') || 3000;
  }
}