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
import { EventSelectionField } from "./EventSelectionField";
import { createSubscription, updateSubscription } from "@/lib/api";
import { Events, NotificationEdit, NotificationProps } from "@/types";

interface CheckboxReactHookFormMultipleProps {
  user_id: string;
  repo_name: string;
  events: Events[];
  items: Events[];
  notificationSubscription: string;
}

export function CheckboxReactHookFormMultiple({
  user_id,
  repo_name,
  events,
  items,
  notificationSubscription
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

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      if (events.length > 0) {
        const dataTransformed: NotificationEdit = {
          notificationSubscription,
          user_id: data.user_id,
          repo_name: data.repo_name,
          events: {
            added: data.items.filter((item) => !events.some((event) => event.event_name === item)),
            removed: events.filter((event) => !data.items.includes(event.event_name)).map((event) => event.event_name),
          },
        };
        await updateSubscription(dataTransformed);
      } else {
        const dataTransformed: NotificationProps = {
          user_id: data.user_id,
          repo_name: data.repo_name,
          events: data.items,
        };
        await createSubscription(dataTransformed);
      }

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
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: (
          <Typography variant="p">
            Failed to process subscription. Please try again.
          </Typography>
        ),
      });
    }
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
