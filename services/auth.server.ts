"use server"

export async function authenticateUser(data: FormData) {
    const email = data.get("email");
    console.log(email);
}