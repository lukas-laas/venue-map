"use client";
import { getAllVenues } from "@/queries";
import { Map } from "./_components/map";

export default function Home() {
  // const venues = await getAllVenues();
  // console.log(venues);
  return (
    <main className="">
      <Map />
    </main>
  );
}
