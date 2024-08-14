import { text, pgTable, uuid, date } from "drizzle-orm/pg-core";

export const venues = pgTable("venues", {
  id: uuid("id").defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  address: text("address").notNull(),
  longitude: text("longitude").notNull(),
  latitude: text("latitude").notNull(),
  updatedAt: date("updatedAt").defaultNow(),
});

export const suggestions = pgTable("suggestions", {
  id: uuid("id").defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  address: text("address").notNull(),
});
