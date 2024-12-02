import { Order } from "./order.entity";
import { Product } from "../../products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'order_details' })
export class OrderDetails {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    order_id: string;

    @Column('uuid')
    product_id: string;

    @Column('int')
    amount: number;

    @ManyToOne(() => Order, (order: Order) => order.orderDetails, { nullable: false })
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @ManyToOne(() => Product, { nullable: false })
    @JoinColumn({ name: 'product_id' })
    product: Product;
}
