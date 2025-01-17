import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/db.server"
import Resend from "next-auth/providers/resend"
import {getUserByEmail} from '@/services/user'

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Resend({
        apiKey: process.env.AUTH_RESEND_KEY,
        from: "no-reply@fitbeat.vercel.app",
    })],
    callbacks: {
        async signIn({ user }) {
            if (user.email) {
                //the user object has an email property, which contains the email the user entered.
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
    },
    session: { strategy: "jwt" },
    debug: process.env.NODE_ENV !== "production"
})