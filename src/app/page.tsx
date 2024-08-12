import { getAllVenues } from "@/queries";

export default async function Home() {
  const venues = await getAllVenues();
  console.log(venues);
  return <main className="">Hej!</main>;
}
