import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductSize } from "../../products/entities/product-size.entity";

@Entity({ name: 'sizes' })
export class Size {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 255, unique: true })
    name: string;

    @OneToMany(() => ProductSize, (productSize) => productSize.size)
    productSizes: ProductSize[];
}
