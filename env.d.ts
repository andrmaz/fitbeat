declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            DATABASE_URL: string;
            AUTH_SECRET: string;
        }
    }
}

export { }