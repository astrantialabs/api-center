import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtConstants } from "@api-center/api/authorization";
import axios from "axios";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "username", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials, req) {
                try {
                    const response = await axios.post("http://localhost:3333/api/authorization/login", {
                        username: credentials.username,
                        password: credentials.password,
                    });

                    const user = await axios.get("http://localhost:3333/api/users/me", {
                        headers: {
                            Authorization: `Bearer ${response.data.access_token}`,
                        },
                    });

                    if (user) {
                        return user.data;
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error(error);
                }
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.user = user;
            }
            return token;
        },
        session: async ({ session, token }) => {
            session.user = token.user as any;
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
    session: {
        maxAge: 30 * 24 * 60 * 60,
        strategy: "jwt",
    },
    jwt: {
        secret: jwtConstants.secret,
    },
    secret: jwtConstants.secret,
});
