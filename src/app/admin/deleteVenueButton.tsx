"use client";
import { deleteVenueAction } from "@/lib/actions";

export function DeleteVenueButton({ id }: { id: string }) {
  return (
    <button
      className="bg-red-600 px-2 py-1 rounded-md w-fit text-white h-fit"
      type="button"
      onClick={() => deleteVenueAction(id)}
    >
      Delete
    </button>
  );
}
