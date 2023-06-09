import { index, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const posts = mysqlTable(
  "posts",
  {
    id: varchar("id", { length: 255 }).primaryKey(),
    content: varchar("content", { length: 255 }).notNull(),
    authorId: varchar("author_id", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => ({
    authorIdIdx: index("author_id_idx").on(table.authorId),
  })
);
