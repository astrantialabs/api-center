import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            username: string;
            password: string;
            email: string;
        } & DefaultSession["user"];
    }
}
