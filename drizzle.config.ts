import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  connectionString: process.env.MIGRATION_DB_URL,
} satisfies Config;
