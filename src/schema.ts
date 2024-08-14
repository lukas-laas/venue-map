import { text, pgTable, uuid } from "drizzle-orm/pg-core";

export const venues = pgTable("venues", {
  id: uuid("id").defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  address: text("address").notNull(),
  longitude: text("longitude").notNull(),
  latitude: text("latitude").notNull(),
});

export const suggestions = pgTable("suggestions", {
  id: uuid("id").defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  address: text("address").notNull(),
});
