import { Magic } from 'magic-sdk';

const createMagic = (key: string) => {
    // We make sure that the window object is available
    // Then we create a new instance of Magic using a publishable key
    return typeof window !== 'undefined' ? new Magic(key) : null;
};

const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY)

function loginWithMagicLink(email: string) {
    return magic?.auth.loginWithMagicLink({ email, showUI: true, redirectURI: process.env.NEXT_PUBLIC_MAGIC_REDIRECT_URI });
}

function getUserMetadata() {
    return magic ? magic.user.getInfo() : Promise.resolve(null);
}

function isUserLoggedIn() {
    console.debug(magic)
    return magic ? magic.user.isLoggedIn() : Promise.resolve(false);
}

export { loginWithMagicLink, getUserMetadata, isUserLoggedIn };