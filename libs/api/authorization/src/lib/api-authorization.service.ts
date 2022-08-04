import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ApiUsersService } from "@api-center/api/users";

@Injectable()
export class ApiAuthorizationService {
    constructor(private apiUsersService: ApiUsersService, private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.apiUsersService.findOneByUsername(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
