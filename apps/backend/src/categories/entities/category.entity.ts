import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductCategory } from "../../products/entities/product-category.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'categories' })
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @Column('varchar', { length: 255, unique: true })
    name: string;

    @OneToMany(() => ProductCategory, (productCategory) => productCategory.category, { nullable: true })
    productCategories: ProductCategory[];
}
