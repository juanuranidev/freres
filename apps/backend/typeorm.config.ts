import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ["./src/**/*.entity.ts"],
    migrations: ["./src/config/database/migrations/**/*.ts"],
    synchronize: false,
});

export default AppDataSource;