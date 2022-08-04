import { Test } from "@nestjs/testing";
import { ApiAuthorizationController } from "./api-authorization.controller";
import { ApiAuthorizationService } from "./api-authorization.service";

describe("ApiAuthorizationController", () => {
    let controller: ApiAuthorizationController;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [ApiAuthorizationService],
            controllers: [ApiAuthorizationController],
        }).compile();

        controller = module.get(ApiAuthorizationController);
    });

    it("should be defined", () => {
        expect(controller).toBeTruthy();
    });
});
