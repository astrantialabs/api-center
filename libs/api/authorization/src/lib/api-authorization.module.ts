import { Module } from "@nestjs/common";
import { ApiAuthorizationController } from "./api-authorization.controller";
import { ApiAuthorizationService } from "./api-authorization.service";

import { ApiUsersModule } from "@api-center/api/users";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports: [
        ApiUsersModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: "60s" },
        }),
    ],
    controllers: [ApiAuthorizationController],
    providers: [ApiAuthorizationService, LocalStrategy, JwtStrategy],
    exports: [ApiAuthorizationService],
})
export class ApiAuthorizationModule {}
