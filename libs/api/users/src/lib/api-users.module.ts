import { Module } from "@nestjs/common";
import { ApiUsersController } from "./api-users.controller";
import { ApiUsersService } from "./api-users.service";
import { ApiCommonModule } from "@api-center/api/common";

@Module({
    imports: [ApiCommonModule],
    controllers: [ApiUsersController],
    providers: [ApiUsersService],
    exports: [ApiUsersService],
})
export class ApiUsersModule {}
