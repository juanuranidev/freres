import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OutfitProduct } from './outfit-product.entity';

@Entity({ name: 'outfits' })
export class Outfit {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 255, unique: true })
    image_url: string;

    @OneToMany(() => OutfitProduct, (outfitProducts) => outfitProducts.outfit)
    outfitProducts: OutfitProduct[];
}
