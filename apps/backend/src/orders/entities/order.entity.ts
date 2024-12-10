import { State } from "../../states/entities/state.entity";
import {
    Entity,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderDetails } from "./order-detail.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'orders' })
export class Order {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    buyer_full_name: string;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    direction: string;

    @ApiProperty()
    @Column('int')
    postal_code: number;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    phone_number: string;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    email: string;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    notes: string;

    @ApiProperty({ type: () => State })
    @ManyToOne(() => State, (state) => state.orders, { nullable: false, eager: true })
    @JoinColumn({ name: 'state_id' })
    state: State;

    @ApiProperty({ type: () => [OrderDetails] })
    @OneToMany(() => OrderDetails, (orderDetails: OrderDetails) => orderDetails.order, { nullable: false, eager: true })
    details: OrderDetails[];
}
