import { pgTable, text, serial, timestamp, integer, real, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { usersTable } from "./users";

export const managedApisTable = pgTable("managed_apis", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  version: text("version").notNull().default("1.0.0"),
  status: text("status").notNull().default("draft"),
  category: text("category").notNull(),
  isPublic: boolean("is_public").notNull().default(false),
  baseUrl: text("base_url"),
  requestCount: integer("request_count").notNull().default(0),
  uptime: real("uptime").notNull().default(100),
  avgLatency: real("avg_latency").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertManagedApiSchema = createInsertSchema(managedApisTable).omit({ id: true, createdAt: true });
export type InsertManagedApi = z.infer<typeof insertManagedApiSchema>;
export type ManagedApiRecord = typeof managedApisTable.$inferSelect;
