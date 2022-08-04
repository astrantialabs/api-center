import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { ApiAuthorizationModule } from "@api-center/api/authorization";
import { ApiDatabaseModule } from "@api-center/api/database";

@Module({
    imports: [ApiAuthorizationModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
