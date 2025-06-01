declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      REDIS_URL: string;
      MEDUSA_WORKER_MODE: "shared" | "worker" | "server";
      STORE_CORS: string;
      ADMIN_CORS: string;
      AUTH_CORS: string;
      JWT_SECRET: string;
      COOKIE_SECRET: string;
      // Meili
      MEILISEARCH_HOST: string;
      MEILI_MASTER_KEY: string;
      // MinIO
      S3_FILE_URL: string;
      S3_ACCESS_KEY_ID: string;
      S3_SECRET_ACCESS_KEY: string;
      S3_REGION: string;
      S3_BUCKET: string;
      S3_ENDPOINT: string;
      // Stripe
      STRIPE_API_KEY: string | undefined;
      // Resend
      RESEND_API_KEY: string;
      RESEND_FROM_EMAIL: string;
    }
  }
}
