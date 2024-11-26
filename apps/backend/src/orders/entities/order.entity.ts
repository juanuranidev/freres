import { State } from "../../states/entities/state.entity";
import {
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity({ name: 'orders' })
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 255 })
    buyer_full_name: string;

    @Column('varchar', { length: 255 })
    direction: string;

    @Column('int')
    postal_code: number;

    @Column('varchar', { length: 255 })
    phone_number: string;

    @Column('varchar', { length: 255 })
    email: string;

    @Column('varchar', { length: 255 })
    notes: string;

    @ManyToOne(() => State, (state) => state.orders)
    @JoinColumn({ name: 'state_id' })
    state: State;
}
