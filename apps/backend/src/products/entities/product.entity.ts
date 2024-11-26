import { Column, Entity, OneToMany, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { ProductImage } from './product-images.entity';
import { OutfitProducts } from '../../outfits/entities/outfit-products.entity';

@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 255, unique: true })
    title: string;

    @Column('numeric', { precision: 10, scale: 2 })
    price: number;

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
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

    @OneToMany(() => OutfitProducts, (outfitProducts) => outfitProducts.product)
    outfitProducts: OutfitProducts[];

    @BeforeInsert()
    async generateSlug() {
        this.slug = this.title.toLowerCase().replace(/ /g, '-');
    }
}
