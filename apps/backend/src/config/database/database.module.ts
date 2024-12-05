

import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import databaseEnviroment from "./enviroments";
import DatabaseServiceModule from "./service/database.service";


@Module({
    imports: [
        ConfigModule.forRoot({
            load: [...databaseEnviroment],
            isGlobal: true,
        }),
        DatabaseServiceModule,
    ],
    providers: [ConfigService],
    exports: [ConfigService],
})
export default class DatabaseConfigModule2 { }