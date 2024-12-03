import { Order } from "../../orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'states' })
export class State {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 255 })
    name: string;

    @OneToMany(() => Order, (order: Order) => order.state)
    orders: Order[];
}
