import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductCategory } from "../../products/entities/product-categories.entity";

@Entity({ name: 'categories' })
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 255, unique: true })
    name: string;

    @OneToMany(() => ProductCategory, (productCategory) => productCategory.category)
    productCategories: ProductCategory[];
}
