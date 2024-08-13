import { getAllVenues, getAllSuggestions } from "@/queries";
import { AdminForm } from "./admin-form";

export default async function Page() {
  const venues = await getAllVenues();
  const suggestions = await getAllSuggestions();
  return (
    <>
      <h1>Admin page!</h1>
      <AdminForm />
      <h2>Venues</h2>
      {venues?.map((venue) => {
        return <p key={venue.id}>{venue.name}</p>;
      })}
      <h2>Suggestions</h2>
      {suggestions?.map((suggestion) => {
        return <p key={suggestion.id}>{suggestion.name}</p>;
      })}
    </>
  );
}
