import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'product_images' })
export class ProductImage {
    @ApiProperty()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    url: string;

    @ManyToOne(() => Product, (product) => product.images, { nullable: false, })
    @JoinColumn({ name: 'product_id' })
    product: Product;
}
