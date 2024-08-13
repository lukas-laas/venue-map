import { drizzle } from "drizzle-orm/postgres-js/driver";
import postgres from "postgres";
import * as schema from "./schema";

// const client = postgres(process.env.POSTGRES_URL!);

// const db = drizzle(client, { schema });

const mockVenues = [
  {
    id: "1",
    name: "Kulturhuset femman",
    description: "Ideell förening, köp medlemskap senast dagen innan.",
    address: "Sofielundsgatan 5",
    updated: new Date(),
    location: [59.8512197, 17.6620915],
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
