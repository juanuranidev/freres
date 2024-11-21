import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'product_images' })
export class ProductImage {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('varchar', { length: 255 })
    url: string;

    @ManyToOne(() => Product, (product) => product.images, { nullable: false, })
    @JoinColumn({ name: 'product_id' })
    product: Product;
}
