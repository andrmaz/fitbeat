declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            DATABASE_URL: string;
            NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY: string;
        }
    }
}

export { }