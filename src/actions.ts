import { redirect } from "next/navigation";

export async function redirectHome() {
  await redirect("/");
}
