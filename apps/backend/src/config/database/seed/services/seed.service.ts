import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CategoriesService } from 'categories/services/categories.service';
import { CATEGORIES_SEED } from 'categories/database/seed/categories.seed';
import { SizesService } from 'sizes/services/sizes.service';
import { ProductsService } from 'products/services/products.service';
import { CreateProductDto } from 'products/dtos/post/create-product.dto';
import { CreateSizeDto } from 'sizes/dto/post/create-size.dto';
import { CreateCategoryDto } from 'categories/dto/create-category.dto';
import { PRODUCTS_SEED } from 'products/database/seed/products.seed';
import { SIZES_SEED } from 'sizes/database/seed/sizes.seed';
import { StatesService } from 'states/services/states.service';
import { STATES_SEED } from 'states/database/seed/states.seed';
import { CreateStateDto } from 'states/dto/post/create-state.dto';
import { OutfitsService } from 'outfits/services/outfits.service';
import { CreateOutfitDto } from 'outfits/dtos/post/create-outfit.dto';
import { OUTFITS_SEED } from 'outfits/database/seed/outfits.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly sizesService: SizesService,
    private readonly statesService: StatesService,
    private readonly outfitsService: OutfitsService,
    private readonly productsService: ProductsService,
    private readonly categoriesService: CategoriesService,
  ) { }

  async run() {
    try {
      // States
      const statesSeed: CreateStateDto[] = STATES_SEED;
      await this.statesService.createManyFromSeed(statesSeed);

      // Categories
      const categoriesSeed: CreateCategoryDto[] = CATEGORIES_SEED;
      await this.categoriesService.createManyFromSeed(categoriesSeed);

      // Sizes
      const sizesSeed: CreateSizeDto[] = SIZES_SEED;
      await this.sizesService.createManyFromSeed(sizesSeed);

      // Products
      const productsSeed: CreateProductDto[] = PRODUCTS_SEED;
      await this.productsService.createManyFromSeed(productsSeed);

      // Outfits
      const outfitsSeed: CreateOutfitDto[] = OUTFITS_SEED;
      await this.outfitsService.createManyFromSeed(outfitsSeed);

      return {
        message: 'Seed executed successfully'
      };
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Error executing seed process');
    }
  }
}
