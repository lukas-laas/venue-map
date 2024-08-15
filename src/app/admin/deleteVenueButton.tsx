"use client";
import { deleteVenue } from "@/queries";

export function DeleteVenueButton({ id }: { id: string }) {
  return (
    <button
      className="bg-red-600 px-2 py-1 rounded-md w-fit text-white"
      type="button"
      onClick={() => deleteVenue(id)}
    >
      Delete
    </button>
  );
}