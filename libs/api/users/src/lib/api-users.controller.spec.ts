import { Test } from "@nestjs/testing";
import { ApiUsersController } from "./api-users.controller";
import { ApiUsersService } from "./api-users.service";

describe("ApiUsersController", () => {
    let controller: ApiUsersController;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [ApiUsersService],
            controllers: [ApiUsersController],
        }).compile();

        controller = module.get(ApiUsersController);
    });

    it("should be defined", () => {
        expect(controller).toBeTruthy();
    });
});
