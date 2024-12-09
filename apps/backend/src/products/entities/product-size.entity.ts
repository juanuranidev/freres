import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Size } from "../../sizes/entities/size.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'product_sizes' })
export class ProductSize {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @Column('int')
    stock: number;

    @ApiProperty({ type: () => Product })
    @ManyToOne(() => Product, (product) => product.id, { nullable: false })
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @ApiProperty({ type: () => Size })
    @ManyToOne(() => Size, (size) => size.id, { nullable: false })
    @JoinColumn({ name: 'size_id' })
    size: Size;
}
