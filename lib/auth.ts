import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/db"
import { getUserByEmail } from '@/services/user'
import EmailProvider from "next-auth/providers/nodemailer";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        EmailProvider({
            //server: process.env.EMAIL_SERVER,
            server: {
                host: "localhost",
                port: 1025,
                secure: false,
                auth: null,
                ignoreTLS: true,
            },
            from: process.env.EMAIL_FROM,
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            if (user.email) {
                //the user object has an email property, which contains the email the user entered
                const userExists = await getUserByEmail(user.email)
                if (userExists) {
                    //if the email exists in the User collection, email them a magic login link
                    return true;
                } else {
                    return "/register";
                }
            }
            return false;
        },
        async redirect({ baseUrl }) {
            return `${baseUrl}/dashboard`;
        },
    },
    session: { strategy: "jwt" },
    debug: process.env.NODE_ENV !== "production",
})