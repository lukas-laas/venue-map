"use server";
import { drizzle } from "drizzle-orm/postgres-js/driver";
import postgres from "postgres";
import * as schema from "./schema";
import { revalidatePath } from "next/cache";

// const client = postgres(process.env.POSTGRES_URL!);

// const db = drizzle(client, { schema });

const mockVenues = [
  {
    id: "1",
    name: "Kulturhuset femman",
    description: "Ideell förening, köp medlemskap senast dagen innan.",
    address: "Sofielundsgatan 5",
    updated: new Date(),
    coordinates: [59.85139, 17.66488],
  },
  {
    id: "2",
    name: "Puben Uppsala",
    description: "Pub, scen finns i källaren.",
    address: "S:t Olofsgatan 9",
    updated: new Date(),
    coordinates: [59.86361, 17.64169],
  },
];

const mockSuggestions = [
  {
    id: "2",
    name: "Puben Uppsala",
    description: "Pub, scen finns i källaren.",
    address: "S:t Olofsgatan 9",
  },
];

export const getAllVenues = async () => {
  try {
    // const venues = await db.select().from(schema.venues);
    const venues = await mockVenues;
    return venues;
  } catch (error) {
    console.log("Failed to get venues");
  }
};

export const getAllSuggestions = async () => {
  try {
    // const venues = await db.select().from(schema.venues);
    const suggestions = await mockSuggestions;
    return suggestions;
  } catch (error) {
    console.log("Failed to get venues");
  }
};

export const suggestVenue = async (suggestion: any) => {
  try {
    // const venues = await db.select().from(schema.venues);
    await mockSuggestions.push(suggestion);
    console.log(mockSuggestions);
    revalidatePath("/");
  } catch (error) {
    console.log("Failed to post suggestion");
  }
};

export const addVenue = async (venue: any) => {
  try {
    // const venues = await db.select().from(schema.venues);
    const { name, description, address, latitude, longitude } = venue;

    await mockVenues.push({
      id: "iafg",
      name: name,
      description: description,
      address: address,
      updated: new Date(),
      coordinates: [latitude, longitude],
    });
    //console.log(mockVenues);
    revalidatePath("/");
  } catch (error) {
    console.log("Failed to post venue");
  }
};
