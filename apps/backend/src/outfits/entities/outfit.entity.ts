import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OutfitProduct } from './outfit-product.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'products/entities/product.entity';

@Entity({ name: 'outfits' })
export class Outfit {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @Column('varchar', { length: 255, unique: true })
    image_url: string;

    @OneToMany(() => OutfitProduct, (outfitProducts) => outfitProducts.outfit)
    outfits: OutfitProduct[];

    @ApiProperty({ type: () => [Product] })
    products: Product[];
}
