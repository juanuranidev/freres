import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OutfitProducts } from './outfit-products.entity';

@Entity({ name: 'outfits' })
export class Outfit {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 255, unique: true })
    image_url: string;

    @OneToMany(() => OutfitProducts, (outfitProducts) => outfitProducts.outfit)
    outfitProducts: OutfitProducts[];
}
