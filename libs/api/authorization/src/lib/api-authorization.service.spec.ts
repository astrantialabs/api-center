import { Test } from "@nestjs/testing";
import { ApiAuthorizationService } from "./api-authorization.service";

describe("ApiAuthorizationService", () => {
    let service: ApiAuthorizationService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [ApiAuthorizationService],
        }).compile();

        service = module.get(ApiAuthorizationService);
    });

    it("should be defined", () => {
        expect(service).toBeTruthy();
    });
});
