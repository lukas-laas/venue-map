"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { suggestVenueAction } from "@/lib/actions";
import { useToast } from "@/components/hooks/use-toast";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Venue must have name.",
  }),
  address: z.string().min(1, {
    message: "Venue must have address.",
  }),
  description: z.string(),
});

export type SuggestionForm = z.infer<typeof formSchema>;

export function SuggestionsForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<SuggestionForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      description: "",
    },
  });

  function onSubmit(values: SuggestionForm) {
    setLoading(true);
    suggestVenueAction(values).then(() => {
      toast({
        description: "Suggestion posted!",
      });
      setLoading(false);
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Venue name *</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>The name of the venue.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address *</FormLabel>
              <FormControl>
                <Input placeholder="Address" {...field} />
              </FormControl>
              <FormDescription>The location of the venue.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormDescription>Description of venue.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-between ">
          <Link
            href="/"
            className="w-fit py-2 px-4 text-zinc-50 rounded-md bg-zinc-950 hover:bg-zinc-800 transition-colors"
          >
            Back
          </Link>
          <Button
            type="submit"
            className="gap-4 bg-emerald-600 hover:bg-emerald-500 transition-colors"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
