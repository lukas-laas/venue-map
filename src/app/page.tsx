"use client";
import { getAllVenues } from "@/queries";
import dynamic from "next/dynamic";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("./_components/map"), {
    ssr: false,
  });
  return (
    <main className="">
      <MapWithNoSSR />
    </main>
  );
}
