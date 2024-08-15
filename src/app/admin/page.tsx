import { getAllVenues, getAllSuggestions } from "@/queries";
import { AdminForm } from "./admin-form";
import { DeleteVenueButton } from "./deleteVenueButton";
import { DeleteSuggestionButton } from "./deleteSuggestionButton";

export default async function Page() {
  const venues = await getAllVenues();
  const suggestions = await getAllSuggestions();
  return (
    <>
      <main className="p-4">
        <h1 className="text-2xl">Admin page!</h1>
        <section className="flex w-full max-w-4xl justify-between gap-4">
          <div className="max-w-xl w-full min-w-80">
            <h2>Add Venue</h2>
            <AdminForm />
          </div>
          <div>
            <h2>Suggestions</h2>
            <ul className="flex flex-col gap-1">
              {suggestions?.map((suggestion) => {
                return (
                  <li
                    key={suggestion.id}
                    className="p-2 gap-1 flex flex-col border-black border w-full min-w-72 rounded-sm"
                  >
                    <span className="flex justify-between">
                      <h3 className="text-lg">{suggestion.name}</h3>
                      <DeleteSuggestionButton id={suggestion.id} />
                    </span>
                    <p>{suggestion.address}</p>
                    <p>{suggestion.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2>Venues</h2>
            <ul className="flex flex-col gap-1">
              {venues?.map((venue) => {
                return (
                  <li
                    key={venue.id}
                    className="p-2 gap-1 flex flex-col border-black border w-full  min-w-72 rounded-sm"
                  >
                    <span className="flex justify-between">
                      <h3 className="text-lg">{venue.name}</h3>
                      <DeleteVenueButton id={venue.id} />
                    </span>
                    <p>{venue.address}</p>
                    <p>{venue.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
