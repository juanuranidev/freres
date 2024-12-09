import { ApiProperty } from "@nestjs/swagger";
import { Category } from "../../categories/entities/category.entity";
import { Product } from "./product.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'product_categories' })
export class ProductCategory {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ type: () => Product })
    @ManyToOne(() => Product, (product) => product.id, { nullable: false })
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @ApiProperty({ type: () => Category })
    @ManyToOne(() => Category, (category) => category.id, { nullable: false })
    @JoinColumn({ name: 'category_id' })
    category: Category;
}
