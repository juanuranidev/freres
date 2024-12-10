import { BeforeRecover, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Outfit } from "./outfit.entity";
import { Product } from "../../products/entities/product.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'outfit_products' })
export class OutfitProduct {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ type: () => Outfit })
    @ManyToOne(() => Outfit, (outfit) => outfit.id, { nullable: false })
    @JoinColumn({ name: 'outfit_id' })
    outfit: Outfit;

    @ApiProperty({ type: () => Product })
    @ManyToOne(() => Product, (product) => product.id, { nullable: false })
    @JoinColumn({ name: 'product_id' })
    product: Product;

}