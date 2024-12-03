import { BeforeRecover, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Outfit } from "./outfit.entity";
import { Product } from "../../products/entities/product.entity";

@Entity({ name: 'outfit_products' })
export class OutfitProduct {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Outfit, (outfit) => outfit.id, { nullable: false })
    @JoinColumn({ name: 'outfit_id' })
    outfit: Outfit;

    @ManyToOne(() => Product, (product) => product.id, { nullable: false })
    @JoinColumn({ name: 'product_id' })
    product: Product;
}