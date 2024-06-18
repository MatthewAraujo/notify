"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltiper } from "@/components/utils/tooltip";
import { Events } from "@/types";
import { UseFormReturn } from "react-hook-form";

interface EventSelectionFieldProps {
  form: UseFormReturn<any>;
  items: Events[];
}

export function EventSelectionField({ form, items }: EventSelectionFieldProps) {
  return (
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
                          checked={field.value?.includes(item.event_name)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.event_name])
                              : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== item.event_name
                                )
                              );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="flex items-center justify-between w-full pr-4 font-normal">
                        {item.event_name}
                        <Tooltiper
                          key={item.id}
                          description={item.description}
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
  );
}
