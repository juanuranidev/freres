import { Product } from 'products/entities/product.entity';
import { Controller, Get, Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { ProductsService } from 'products/services/products.service';
import { ProductReadAllCriteriaDto } from 'products/dtos/read/read-all/products.read-all-criteria.dto';
import { ApiResponse } from '@nestjs/swagger';
import { ProductReadAllResponseDto } from 'products/dtos/read/read-all/products.read-all-response.dto';
import { ProductReadByIdResponseDto } from 'products/dtos/read/read-by-id/products.read-by-id-response.dto';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService
    ) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Get all products', type: [ProductReadAllResponseDto] })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    readAll(@Query() productReadAllCriteriaDto: ProductReadAllCriteriaDto) {
        return this.productsService.readAll(productReadAllCriteriaDto);
    }

    @Get(':id')
    @ApiResponse({ status: 404, description: 'Product not found' })
    @ApiResponse({ status: 200, description: 'Get product by id', type: ProductReadByIdResponseDto })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    readById(@Param('id', ParseUUIDPipe) id: string) {
        return this.productsService.readById(id);
    }

}
