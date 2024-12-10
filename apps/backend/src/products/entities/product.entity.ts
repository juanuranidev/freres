import { Column, Entity, OneToMany, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { ProductImage } from './product-image.entity';
import { OutfitProduct } from '../../outfits/entities/outfit-product.entity';
import { Category } from 'categories/entities/category.entity';
import { ProductCategory } from './product-category.entity';
import { ProductSize } from './product-size.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Size } from 'sizes/entities/size.entity';

@Entity({ name: 'products' })
export class Product {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @Column('varchar', { length: 255, unique: true })
    title: string;

    @ApiProperty()
    @Column('numeric', { precision: 10, scale: 2 })
    price: number;

    @ApiProperty()
    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @ApiProperty()
    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @ApiProperty()
    @Column('int')
    discount: number;

    @ApiProperty()
    @Column('varchar', { length: 255, unique: true })
    slug: string;

    @ApiProperty()
    @Column('text')
    description: string;

    @ApiProperty()
    @OneToMany(() => ProductImage, (productImage) => productImage.product, {
        eager: true,
    })
    images: ProductImage[];

    @OneToMany(() => OutfitProduct, (outfitProducts) => outfitProducts.product)
    outfits: OutfitProduct[];

    @OneToMany(() => ProductCategory, (productCategory) => productCategory.product)
    categories: ProductCategory[];

    @OneToMany(() => ProductSize, (productSize) => productSize.product)
    sizes: ProductSize[];

    @BeforeInsert()
    async generateSlug() {
        this.slug = this.title.toLowerCase().replace(/ /g, '-');
    }
}
