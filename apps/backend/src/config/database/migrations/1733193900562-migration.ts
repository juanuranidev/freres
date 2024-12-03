import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1733193900562 implements MigrationInterface {
    name = 'Migration1733193900562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "outfit_products" DROP CONSTRAINT "FK_77cd5b7e0cb4cbb9c88b03f69dd"`);
        await queryRunner.query(`ALTER TABLE "outfit_products" DROP CONSTRAINT "FK_73c5950f1545fc20a1cbb91cd18"`);
        await queryRunner.query(`ALTER TABLE "outfit_products" ALTER COLUMN "outfit_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "outfit_products" ALTER COLUMN "product_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_categories" DROP CONSTRAINT "FK_8748b4a0e8de6d266f2bbc877f6"`);
        await queryRunner.query(`ALTER TABLE "product_categories" DROP CONSTRAINT "FK_9148da8f26fc248e77a387e3112"`);
        await queryRunner.query(`ALTER TABLE "product_categories" ALTER COLUMN "product_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_categories" ALTER COLUMN "category_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_sizes" DROP CONSTRAINT "FK_b6d94a689dd115cdf01589b9615"`);
        await queryRunner.query(`ALTER TABLE "product_sizes" DROP CONSTRAINT "FK_b77c486737027396bcfdc0897bf"`);
        await queryRunner.query(`ALTER TABLE "product_sizes" ALTER COLUMN "product_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_sizes" ALTER COLUMN "size_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "outfit_products" ADD CONSTRAINT "FK_77cd5b7e0cb4cbb9c88b03f69dd" FOREIGN KEY ("outfit_id") REFERENCES "outfits"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "outfit_products" ADD CONSTRAINT "FK_73c5950f1545fc20a1cbb91cd18" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_categories" ADD CONSTRAINT "FK_8748b4a0e8de6d266f2bbc877f6" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_categories" ADD CONSTRAINT "FK_9148da8f26fc248e77a387e3112" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_sizes" ADD CONSTRAINT "FK_b6d94a689dd115cdf01589b9615" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_sizes" ADD CONSTRAINT "FK_b77c486737027396bcfdc0897bf" FOREIGN KEY ("size_id") REFERENCES "sizes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_sizes" DROP CONSTRAINT "FK_b77c486737027396bcfdc0897bf"`);
        await queryRunner.query(`ALTER TABLE "product_sizes" DROP CONSTRAINT "FK_b6d94a689dd115cdf01589b9615"`);
        await queryRunner.query(`ALTER TABLE "product_categories" DROP CONSTRAINT "FK_9148da8f26fc248e77a387e3112"`);
        await queryRunner.query(`ALTER TABLE "product_categories" DROP CONSTRAINT "FK_8748b4a0e8de6d266f2bbc877f6"`);
        await queryRunner.query(`ALTER TABLE "outfit_products" DROP CONSTRAINT "FK_73c5950f1545fc20a1cbb91cd18"`);
        await queryRunner.query(`ALTER TABLE "outfit_products" DROP CONSTRAINT "FK_77cd5b7e0cb4cbb9c88b03f69dd"`);
        await queryRunner.query(`ALTER TABLE "product_sizes" ALTER COLUMN "size_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_sizes" ALTER COLUMN "product_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_sizes" ADD CONSTRAINT "FK_b77c486737027396bcfdc0897bf" FOREIGN KEY ("size_id") REFERENCES "sizes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_sizes" ADD CONSTRAINT "FK_b6d94a689dd115cdf01589b9615" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_categories" ALTER COLUMN "category_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_categories" ALTER COLUMN "product_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_categories" ADD CONSTRAINT "FK_9148da8f26fc248e77a387e3112" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_categories" ADD CONSTRAINT "FK_8748b4a0e8de6d266f2bbc877f6" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "outfit_products" ALTER COLUMN "product_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "outfit_products" ALTER COLUMN "outfit_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "outfit_products" ADD CONSTRAINT "FK_73c5950f1545fc20a1cbb91cd18" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "outfit_products" ADD CONSTRAINT "FK_77cd5b7e0cb4cbb9c88b03f69dd" FOREIGN KEY ("outfit_id") REFERENCES "outfits"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
