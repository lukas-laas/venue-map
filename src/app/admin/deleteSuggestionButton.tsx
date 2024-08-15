"use client";
import { deleteSuggestion } from "@/queries";

export function DeleteSuggestionButton({ id }: { id: string }) {
  return (
    <button
      className="bg-red-600 px-2 py-1 rounded-md w-fit text-white"
      type="button"
      onClick={() => deleteSuggestion(id)}
    >
      Delete
    </button>
  );
}
