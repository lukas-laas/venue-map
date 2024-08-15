"use server";

import { drizzle } from "drizzle-orm/postgres-js/driver";
import postgres from "postgres";
import * as schema from "./schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { redirectHome } from "./actions";
import { eq } from "drizzle-orm";

const client = postgres(process.env.POSTGRES_URL as string);

const db = drizzle(client, { schema });

export const getAllVenues = async () => {
  try {
    // const venues = await db.select().from(schema.venues);
    const venues = await db.query.venues.findMany();
    if (!venues) throw new Error("Failed to get venues");

    return venues;
  } catch (error) {
    console.log({
      error: error instanceof Error ? error.message : "Fail",
    });
  }
};

export const getAllSuggestions = async () => {
  try {
    // const venues = await db.select().from(schema.venues);
    const suggestions = db.query.suggestions.findMany();
    if (!suggestions) throw new Error("Failed to get venues");
    return suggestions;
  } catch (error) {
    console.log({
      error: error instanceof Error ? error.message : "Fail",
    });
  }
};

export const suggestVenue = async (suggestion: any) => {
  try {
    const insert = await db
      .insert(schema.suggestions)
      .values(suggestion)
      .returning();
    if (!insert) throw new Error("Failed to post suggestion");
  } catch (error) {
    console.log({
      error: error instanceof Error ? error.message : "Fail",
    });
  } finally {
    await revalidatePath("/");
    redirect("/");
  }
};

export const addVenue = async (venue: any) => {
  try {
    const newVenue = await db.insert(schema.venues).values(venue).returning();
    if (!newVenue) throw new Error("Failed to post venue");
    console.log(newVenue);
    revalidatePath("/", "page");
  } catch (error) {
    console.log({
      error: error instanceof Error ? error.message : "Fail",
    });
  }
};

export const deleteVenue = async (id: any) => {
  try {
    const deleted = await db
      .delete(schema.venues)
      .where(eq(id, schema.venues.id));
    if (!deleted) throw new Error("Failed to delete venue");
    console.log(deleted);
    revalidatePath("/", "page");
  } catch (error) {
    console.log({
      error: error instanceof Error ? error.message : "Fail",
    });
  }
};
