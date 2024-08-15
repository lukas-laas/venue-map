import { SuggestionsForm } from "./suggestions-form";

export default function Page() {
  return (
    <main className="max-w-lg mx-auto my-16 px-2">
      <div className="border-2 border-zinc-900 p-8 rounded-lg">
        <h2 className="text-lg">Suggest new venue / venue update</h2>
        <SuggestionsForm />
      </div>
    </main>
  );
}
