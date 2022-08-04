import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiUsersService } from "./api-users.service";

@Controller("users")
export class ApiUsersController {
    constructor(private apiUsersService: ApiUsersService) {}

    @UseGuards(AuthGuard("jwt"))
    @Get("me")
    getProfile(@Request() req) {
        return this.apiUsersService.findOneByUsername(req.user.username);
    }
}
