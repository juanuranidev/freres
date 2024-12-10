import { registerAs } from "@nestjs/config";

export default registerAs("database", () => ({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    autoLoadEntities: true,
    synchronize: process.env.SYNC_MIGRATIONS === 'true',
    logging: false,
    entities: [__dirname + '/**/*.entity.{js,ts}'],
}));

