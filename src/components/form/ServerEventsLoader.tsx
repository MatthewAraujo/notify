// components/ServerEventsLoader.tsx
import { Events } from "@/types";
import { loadEvents } from "./loadEvents";
import { CheckboxReactHookFormMultiple } from "./Checkbox";
import events from "events";

interface ServerEventsLoaderProps {
  user_id: string;
  repo_name: string;
  events: Events[];
  notificationSubscription: string;
}

export async function ServerEventsLoader({
  user_id,
  repo_name,
  events,
  notificationSubscription
}: ServerEventsLoaderProps) {
  const items = await loadEvents();
  return (
    <CheckboxReactHookFormMultiple
      user_id={user_id}
      repo_name={repo_name}
      events={events}
      items={items}
      notificationSubscription={notificationSubscription}
    />
  );
}
