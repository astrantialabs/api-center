import { Controller, Request, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiAuthorizationService } from "./api-authorization.service";

@Controller("authorization")
export class ApiAuthorizationController {
    constructor(private apiAuthorizationService: ApiAuthorizationService) {}

    @UseGuards(AuthGuard("local"))
    @Post("login")
    async login(@Request() req) {
        return this.apiAuthorizationService.login(req.user);
    }
}
