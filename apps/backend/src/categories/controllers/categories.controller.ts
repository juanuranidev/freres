import { Category } from 'categories/entities/category.entity';
import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from 'categories/services/categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }

    @Get()
    readAll(): Promise<Category[]> {
        return this.categoriesService.readAll();
    }

}
