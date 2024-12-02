import {
  Logger,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { OrdersRepository } from 'orders/repositories/orders.repository';

@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name);
  constructor(
    private readonly ordersRepository: OrdersRepository
  ) { }

  async create(createOrderDto: CreateOrderDto): Promise<void> {
    try {
      await this.ordersRepository.create(createOrderDto);
    } catch (error) {
      this.logger.error(`Failed to create order: ${error.message}`);
      throw new InternalServerErrorException('Failed to create order');
    }
  }

}
