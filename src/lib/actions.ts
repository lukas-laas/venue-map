"use server";

import { revalidatePath } from "next/cache";
import {
  addVenue,
  deleteSuggestion,
  deleteVenue,
  getAllSuggestions,
  getAllVenues,
  suggestVenue,
} from "./queries";
import { redirect } from "next/navigation";

export async function getAllVenuesAction() {
  const result = await getAllVenues();
  return result;
}

export async function getAllSuggestionsAction() {
  if (process.env.ENVIORNMENT !== "DEVELOPMENT")
    throw new Error("Unauthorized");
  const result = await getAllSuggestions();
  return result;
}

export async function suggestVenueAction(suggestion: any) {
  await suggestVenue(suggestion);
  revalidatePath("/admin");
  redirect("/");
}

export async function deleteSuggestionAction(id: string) {
  if (process.env.ENVIORNMENT !== "DEVELOPMENT")
    throw new Error("Unauthorized");
  await deleteSuggestion(id);
  revalidatePath("/", "page");
}

export async function deleteVenueAction(id: string) {
  if (process.env.ENVIORNMENT !== "DEVELOPMENT")
    throw new Error("Unauthorized");
  await deleteVenue(id);
  revalidatePath("/", "page");
}

export async function addVenueAction(suggestion: any) {
  if (process.env.ENVIORNMENT !== "DEVELOPMENT")
    throw new Error("Unauthorized");
  await addVenue(suggestion);
  revalidatePath("/", "page");
  revalidatePath("/admin");
}
