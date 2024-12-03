import { Category } from "../../categories/entities/category.entity";
import { Product } from "./product.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'product_categories' })
export class ProductCategory {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Product, (product) => product.id)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @ManyToOne(() => Category, (category) => category.id)
    @JoinColumn({ name: 'category_id' })
    category: Category;
}
