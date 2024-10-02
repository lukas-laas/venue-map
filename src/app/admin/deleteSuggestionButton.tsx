"use client";
import { deleteSuggestionAction } from "@/lib/actions";

export function DeleteSuggestionButton({ id }: { id: string }) {
  return (
    <button
      className="bg-red-600 px-2 py-1 rounded-md w-fit text-white h-fit"
      type="button"
      onClick={() => deleteSuggestionAction(id)}
    >
      Delete
    </button>
  );
}
