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
import { suggestVenue } from "@/queries";
import { redirectHome } from "@/actions";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Venue must have name.",
  }),
  address: z.string().min(1, {
    message: "Venue must have address.",
  }),
  description: z.string(),
});

export function SuggestionsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    suggestVenue(values);
  }

  return (
    <div className="border-2 border-zinc-900 p-8 rounded-lg">
      <h2>Suggest new venue / venue update</h2>
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
          <div className="w-full flex justify-between">
            <Button
              type="button"
              className="w-fit"
              onClick={() => redirectHome()}
            >
              Back
            </Button>
            <Button type="submit" className="bg-emerald-700">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
