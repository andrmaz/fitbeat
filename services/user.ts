import { prisma } from "@/lib/db"

export function getUserByEmail(email: string) {
    return prisma.user.findFirst({
        where: {
            email
        }
    })
}