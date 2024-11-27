import { SuggestionForm } from "@/app/suggestions/suggestions-form";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sendSms(suggestion: SuggestionForm) {
  const username = process.env.ELKS_NAME as string;
  const password = process.env.ELKS_PASSWORD as string;
  const phoneNumber = process.env.TELEPHONE as string;
  const auth = Buffer.from(username + ":" + password).toString("base64");

  let data = new URLSearchParams({
    from: "VenueMap",
    to: phoneNumber,
    message: suggestion.name,
  }).toString();

  fetch("https://api.46elks.com/a1/sms", {
    method: "post",
    body: data,
    headers: { Authorization: "Basic " + auth },
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}
