import { Order } from "../entities/order.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository, QueryRunner } from "typeorm";
import { CreateOrderDto } from "../dto/create-order.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderDetails } from "../entities/order-detail.entity";

@Injectable()
export class OrdersRepository {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        @InjectRepository(OrderDetails)
        private readonly orderDetailsRepository: Repository<OrderDetails>,
        private readonly dataSource: DataSource
    ) { }

    async create(createOrderDto: CreateOrderDto): Promise<void> {
        const {
            buyerFullName,
            direction,
            postalCode,
            phoneNumber,
            email,
            notes,
            stateId,
            products
        } = createOrderDto;

        const queryRunner: QueryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        const order: Order = this.orderRepository.create({
            notes,
            email,
            direction,
            state: { id: stateId },
            postal_code: postalCode,
            phone_number: phoneNumber,
            buyer_full_name: buyerFullName,
        });
        const savedOrder: Order = await queryRunner.manager.save(order);

        for (const product of products) {
            const orderDetail: OrderDetails = this.orderDetailsRepository.create({
                order_id: savedOrder.id,
                product_id: product.id,
                amount: product.amount
            });
            await queryRunner.manager.save(orderDetail);
        }
        await queryRunner.commitTransaction();
    }
}
