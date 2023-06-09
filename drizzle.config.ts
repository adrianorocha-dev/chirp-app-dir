import type { Config } from "drizzle-kit";

import "dotenv/config";

const drizzleConfig = {
  schema: "./src/db/schema.ts",
  connectionString: process.env["DATABASE_URL"],
} satisfies Config;

export default drizzleConfig;
