import { Product } from 'products/entities/product.entity';
import { Controller, Get, Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { ProductsService } from 'products/services/products.service';
import { CriteriaProductDto } from 'products/dtos/get/criteria-product.dto';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService
    ) { }

    @Get()
    readAll(@Query() criteria: CriteriaProductDto): Promise<Product[]> {
        return this.productsService.readAll(criteria);
    }

    @Get(':id')
    readById(@Param('id', ParseUUIDPipe) id: string): Promise<Product> {
        return this.productsService.readById(id);
    }

}
