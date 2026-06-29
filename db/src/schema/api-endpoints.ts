import { pgTable, text, serial, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { managedApisTable } from "./managed-apis";

export const apiEndpointsTable = pgTable("api_endpoints", {
  id: serial("id").primaryKey(),
  apiId: integer("api_id").notNull().references(() => managedApisTable.id, { onDelete: "cascade" }),
  method: text("method").notNull(),
  path: text("path").notNull(),
  description: text("description").notNull(),
  deprecated: boolean("deprecated").notNull().default(false),
  authRequired: boolean("auth_required").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertApiEndpointSchema = createInsertSchema(apiEndpointsTable).omit({ id: true, createdAt: true });
export type InsertApiEndpoint = z.infer<typeof insertApiEndpointSchema>;
export type ApiEndpointRecord = typeof apiEndpointsTable.$inferSelect;
