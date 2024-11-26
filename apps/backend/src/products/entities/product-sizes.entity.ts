import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Size } from "../../sizes/entities/sizes.entity";


@Entity({ name: 'product_sizes' })
export class ProductSize {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int')
    stock: number;

    @ManyToOne(() => Product, (product) => product.id)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @ManyToOne(() => Size, (size) => size.id)
    @JoinColumn({ name: 'size_id' })
    size: Size;
}
