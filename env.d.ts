declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            DATABASE_URL: string;
            NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY: string;
            MAGIC_SECRET_KEY: string;
            NEXT_PUBLIC_MAGIC_REDIRECT_URI: string;
        }
    }
}

export { }