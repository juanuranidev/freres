import { Order } from "../entities/order.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { CreateOrderDto } from "../dto/create-order.dto";



@Injectable()
export class OrdersRepository {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>
    ) { }

    async create(createOrderDto: CreateOrderDto) {
        return await this.orderRepository.insert(createOrderDto);
    }

}
