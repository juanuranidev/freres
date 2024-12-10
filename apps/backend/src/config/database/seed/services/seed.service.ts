import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CategoriesService } from 'categories/services/categories.service';
import { CATEGORIES_SEED } from 'categories/database/seed/categories.seed';
import { SizesService } from 'sizes/services/sizes.service';
import { ProductsService } from 'products/services/products.service';
import { ProductCreateManyFromSeedDto } from 'products/dtos/create/create-many-from-seed/products.create-many-from-seed.dto';
import { SizeCreateManyFromSeedDto } from 'sizes/dto/create/sizes.create-many-from-seed.dto';
import { PRODUCTS_SEED } from 'products/database/seed/products.seed';
import { SIZES_SEED } from 'sizes/database/seed/sizes.seed';
import { StatesService } from 'states/services/states.service';
import { STATES_SEED } from 'states/database/seed/states.seed';
import { OutfitsService } from 'outfits/services/outfits.service';
import { OUTFITS_SEED } from 'outfits/database/seed/outfits.seed';
import { CategoryCreateManyFromSeedDto } from 'categories/dto/create/categories.create-many-from-seed.dto';
import { OutfitCreateManyFromSeedDto } from 'outfits/dtos/create/outfits.create-many-from-seed.dto';

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
      const statesSeed: SizeCreateManyFromSeedDto[] = STATES_SEED;
      await this.statesService.createManyFromSeed(statesSeed);

      const categoriesSeed: CategoryCreateManyFromSeedDto[] = CATEGORIES_SEED;
      await this.categoriesService.createManyFromSeed(categoriesSeed);

      const sizesSeed: SizeCreateManyFromSeedDto[] = SIZES_SEED;
      await this.sizesService.createManyFromSeed(sizesSeed);

      const productsSeed: ProductCreateManyFromSeedDto[] = PRODUCTS_SEED;
      await this.productsService.createManyFromSeed(productsSeed);

      const outfitsSeed: OutfitCreateManyFromSeedDto[] = OUTFITS_SEED;
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
