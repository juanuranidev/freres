import { Order } from "./order.entity";
import { Product } from "../../products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'order_details' })
export class OrderDetails {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @Column('uuid')
    order_id: string;

    @ApiProperty()
    @Column('uuid')
    product_id: string;

    @ApiProperty()
    @Column('int')
    amount: number;

    @ManyToOne(() => Order, (order: Order) => order.details, { nullable: false })
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @ApiProperty({ type: () => Product })
    @ManyToOne(() => Product, { nullable: false })
    @JoinColumn({ name: 'product_id' })
    product: Product;
}
