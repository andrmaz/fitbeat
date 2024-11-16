"use server"
import { Magic } from '@magic-sdk/admin';

const createMagic = (key: string) => {
    return Magic.init(key)
}

// Create an instance of magic admin using our secret key (not our publishable key)
const magic = await createMagic(process.env.MAGIC_SECRET_KEY);

function validateToken(token: string) {
    magic.token.validate(token);
}

export { validateToken };