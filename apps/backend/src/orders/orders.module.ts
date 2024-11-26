import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { Order } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './services/orders.service';
import { OrdersRepository } from './repositories/orders.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
  exports: [OrdersService],
})
export class OrdersModule { }
