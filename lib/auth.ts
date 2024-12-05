import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/db.server"
import Resend from "next-auth/providers/resend"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Resend({
        apiKey: process.env.AUTH_RESEND_KEY,
        from: "no-reply@fitbeat.com",

    })],
    session: { strategy: "jwt" },
    debug: process.env.NODE_ENV !== "production"
})