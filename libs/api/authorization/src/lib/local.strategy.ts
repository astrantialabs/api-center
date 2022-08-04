import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ApiAuthorizationService } from "./api-authorization.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private apiAuthorizationService: ApiAuthorizationService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.apiAuthorizationService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
