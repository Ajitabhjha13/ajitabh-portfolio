import { pgTable, serial, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";

/** Messages submitted through the contact form */
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/** Single-row counter for total site visits */
export const pageViews = pgTable("page_views", {
  id: serial("id").primaryKey(),
  count: integer("count").notNull().default(0),
});
