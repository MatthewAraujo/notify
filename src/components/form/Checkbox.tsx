"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
} from "@/components/ui/form";

import { toast } from "@/components/ui/use-toast";
import Typography from "@/components/ui/typography";
import { Events } from "@/types";
import { EventSelectionField } from "./EventSelectionField";

interface CheckboxReactHookFormMultipleProps {
  user_id: string;
  repo_name: string;
  events: Events[];
  items: Events[];
}

export function CheckboxReactHookFormMultiple({
  user_id,
  repo_name,
  events,
  items,
}: CheckboxReactHookFormMultipleProps) {
  const FormSchema = z.object({
    user_id: z.string().uuid(),
    repo_name: z.string(),
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      user_id, // get from page
      repo_name, // get from page
      items: [
        ...events.map((event) => event.event_name),
      ],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const dataTransformed = {
      user_id: data.user_id,
      repo_name: data.repo_name,
      items: data.items,
    }
    console.log(dataTransformed);
    toast({
      description: (
        <div>
          <Typography variant="p">
            {data.items.length} items selected.
          </Typography>
          <Typography variant="p">{data.items.join(", ")}</Typography>
        </div>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border w-full p-4 rounded-md border-gray-500 "
      >
        <EventSelectionField form={form} items={items} />
        <Button type="submit" size="lg" color="ghost">
          <Typography variant="p" className="text-black flex">
            Submit
          </Typography>
        </Button>
      </form>
    </Form>
  );
}
