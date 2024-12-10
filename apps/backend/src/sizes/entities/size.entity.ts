import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductSize } from "../../products/entities/product-size.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'sizes' })
export class Size {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @Column('varchar', { length: 255, unique: true })
    name: string;

    @OneToMany(() => ProductSize, (productSize) => productSize.size)
    productSizes: ProductSize[];
}
