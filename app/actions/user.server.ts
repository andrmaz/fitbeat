"use server";
import { prisma } from "@/lib/db.server";

export async function getFirstUser() {
    return prisma.user.findFirst();
}