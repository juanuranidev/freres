import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductImage } from './product-images.entity';

@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 255, unique: true })
    title: string;

    @Column('numeric', { precision: 10, scale: 2 })
    price: number;

    @Column('timestamp')
    createdAt: Date;

    @Column('timestamp')
    updatedAt: Date;

    @Column('int')
    discount: number;

    @Column('varchar', { length: 255, unique: true })
    slug: string;

    @Column('text')
    description: string;

    @OneToMany(() => ProductImage, (productImage) => productImage.product, {
        eager: true,
    })
    images: ProductImage[];
}
