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
        className="bg-emerald-600 text-white p-2 rounded-md absolute bottom-8 right-8 z-50"
      >
        Suggest Venue
      </Link>
    </main>
  );
}
