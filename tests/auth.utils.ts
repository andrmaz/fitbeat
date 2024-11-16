import { Magic, RPCErrorCode } from 'magic-sdk';

const createMagic = (key: string) => {
    // We make sure that the window object is available
    // Then we create a new instance of Magic using a publishable key
    return typeof window !== 'undefined' ? new Magic(key, { testMode: true }) : null;
};

const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY)

/**
 * Logs in a user with a successful magic link.
 */
function loginSucceed() {
    return loginWithMagicLink('test+success@magic.link');
}

/**
 * Logs in a user with a failing magic link.
 */
function loginFail() {
    return loginWithMagicLink('test+fail@magic.link');
}

/**
 * Logs in a user with a magic link that fails with an error.
 */
function loginFailWithError() {
    return loginWithMagicLink(`test+fail_with_{${RPCErrorCode.MagicLinkFailedVerification}}@magic.link`);
}

function loginWithMagicLink(email: string) {
    return magic?.auth.loginWithMagicLink({ email });
}

export { loginSucceed, loginFail, loginFailWithError };