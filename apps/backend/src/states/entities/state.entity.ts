import { ApiProperty } from "@nestjs/swagger";
import { Order } from "../../orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'states' })
export class State {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    name: string;

    @OneToMany(() => Order, (order: Order) => order.state)
    orders: Order[];
}
