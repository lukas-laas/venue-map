import { getAllVenues, getAllSuggestions } from "@/queries";
import { AdminForm } from "./admin-form";
import { DeleteVenueButton } from "./deleteVenueButton";

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
            <ul>
              {suggestions?.map((suggestion) => {
                return (
                  <li
                    key={suggestion.id}
                    className="p-2 gap-1 flex flex-col border-black border w-full min-w-72 rounded-sm"
                  >
                    <h3 className="text-lg">{suggestion.name}</h3>
                    <p>{suggestion.address}</p>
                    <p>{suggestion.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2>Venues</h2>
            <ul>
              {venues?.map((venue) => {
                return (
                  <li
                    key={venue.id}
                    className="p-2 gap-1 flex flex-col border-black border w-full  min-w-72 rounded-sm"
                  >
                    <h3 className="text-lg">{venue.name}</h3>
                    <p>{venue.address}</p>
                    <p>{venue.description}</p>
                    <DeleteVenueButton id={venue.id} />
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
