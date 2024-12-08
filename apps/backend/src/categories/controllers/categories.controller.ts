import { Category } from 'categories/entities/category.entity';
import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from 'categories/services/categories.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }

    @Get()
    @ApiResponse({ status: 404, description: 'No categories found' })
    @ApiResponse({ status: 200, description: 'Get all categories', type: [Category] })
    readAll(): Promise<Category[]> {
        return this.categoriesService.readAll();
    }

}
