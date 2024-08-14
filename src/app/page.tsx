"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("./_components/map"), {
    ssr: false,
  });
  return (
    <main className="">
      <MapWithNoSSR />
      <Link
        href="/suggestions"
        className="bg-emerald-600 text-white p-2 rounded-md absolute bottom-8 mx-auto z-50 right-0 left-0 w-fit bg-opacity-60 backdrop-blur-sm px-4 hover:bg-emerald-500 hover:bg-opacity-80 transition-colors text-xl"
      >
        Suggest Venue
      </Link>
    </main>
  );
}
