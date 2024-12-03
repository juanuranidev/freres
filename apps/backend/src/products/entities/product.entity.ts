import { Column, Entity, OneToMany, PrimaryGeneratedColumn, BeforeInsert, JoinTable, ManyToMany, BeforeRecover } from 'typeorm';
import { ProductImage } from './product-image.entity';
import { OutfitProduct } from '../../outfits/entities/outfit-product.entity';
import { Category } from 'categories/entities/category.entity';
import { ProductCategory } from './product-category.entity';
import { ProductSize } from './product-size.entity';

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

    @OneToMany(() => OutfitProduct, (outfitProducts) => outfitProducts.product)
    outfitProducts: OutfitProduct[];

    @OneToMany(() => ProductCategory, (productCategory) => productCategory.product)
    productCategories: ProductCategory[];

    @OneToMany(() => ProductSize, (productSize) => productSize.product)
    productSizes: ProductSize[];

    @BeforeInsert()
    async generateSlug() {
        this.slug = this.title.toLowerCase().replace(/ /g, '-');
    }

    @BeforeRecover()
    async beforeRecover() {
        console.log('beforeRecover');
    }
}
