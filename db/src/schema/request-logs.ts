import { pgTable, text, serial, timestamp, integer, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { apiKeysTable } from "./api-keys";

export const requestLogsTable = pgTable("request_logs", {
  id: serial("id").primaryKey(),
  apiKeyId: integer("api_key_id").notNull().references(() => apiKeysTable.id, { onDelete: "cascade" }),
  apiKeyName: text("api_key_name").notNull(),
  method: text("method").notNull(),
  endpoint: text("endpoint").notNull(),
  statusCode: integer("status_code").notNull(),
  status: text("status").notNull().default("success"),
  latency: real("latency").notNull(),
  ip: text("ip"),
  userAgent: text("user_agent"),
  timestamp: timestamp("timestamp", { withTimezone: true }).notNull().defaultNow(),
});

export const insertRequestLogSchema = createInsertSchema(requestLogsTable).omit({ id: true });
export type InsertRequestLog = z.infer<typeof insertRequestLogSchema>;
export type RequestLogRecord = typeof requestLogsTable.$inferSelect;
