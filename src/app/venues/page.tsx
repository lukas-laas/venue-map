import { getAllVenues } from "@/lib/queries";

export default async function Venues() {
  const venues = await getAllVenues();
  return (
    <ul>
      {venues ? (
        venues.map((venue) => {
          return (
            <li key={venue.id}>
              <h2>{venue.name}</h2>
              <p>{venue.description}</p>
            </li>
          );
        })
      ) : (
        <li>No venues found</li>
      )}
    </ul>
  );
}
