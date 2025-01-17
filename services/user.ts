import { prisma } from "@/lib/db.server"

export function getUserByEmail(email: string) {
    return prisma.user.findFirst({
        where: {
            email
        }
    })
}