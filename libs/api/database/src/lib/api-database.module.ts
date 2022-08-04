import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forRoot("mongodb+srv://program:wZ4AhG91l3qD5TIh@api-center.u9exv.mongodb.net/?retryWrites=true&w=majority")],
    controllers: [],
    providers: [],
    exports: [],
})
export class ApiDatabaseModule {}
