"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "@/components/ui/use-toast";

import Typography from "@/components/ui/typography";
import { Tooltiper } from "@/components/utils/tooltip";

// get all event type names and description
const items = [
  {
    id: "push",
    label: "Push",
  },
  {
    id: "pull_request",
    label: "Pull Request",
  },
  {
    id: "issues",
    label: "Issues",
  },
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
];

const FormSchema = z.object({
  user_id: z.string().uuid(),
  repo_name: z.string(),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

interface FormProps {
  user_id: string;
  repo_name: string;
  events: {
    id: number;
    name: string;
  }[];
}

export function CheckboxReactHookFormMultiple({
  user_id,
  repo_name,
  events,
}: FormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      user_id, // get from page
      repo_name, // get from page
      items: [
        ...events.map((event) => {
          return event.name;
        }),
      ],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      description: "Form has been sent successfully",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border w-full p-4 rounded-md border-gray-500 "
      >
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Select your events</FormLabel>
                <FormDescription>
                  Select the events you want to be notified about.
                </FormDescription>
              </div>

              <div className="grid grid-cols-2 gap-1">
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="flex items-center justify-between w-full pr-4 font-normal">
                            {item.label}
                            <Tooltiper
                              key={item.id}
                              description="This is a tooltip description"
                            />
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" color="ghost">
          <Typography variant="p" className="text-black flex">
            Submit
          </Typography>
        </Button>
      </form>
    </Form>
  );
}
