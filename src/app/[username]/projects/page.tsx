import { Dashboard } from "@/components/dashboard/dashboard";
import { getUserRepos } from "@/lib/api";
import { SubscriptionProps } from "@/types";

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const username = params.username.split("-")[0];
  const subscriptionItems = await getUserRepos({ username });
  const items = subscriptionItems.map(transformSubscriptionProps);

  return (
    <div className="mx-auto px-10 xl:px-0 h-full space-y-8 w-full">
      <h1 className="text-2xl font-semibold pt-2">
        {username}&apos;s Project
      </h1>
      <Dashboard username={username} items={items} />
    </div>
  );
}

function transformSubscriptionProps(subscription: SubscriptionProps): {
  repo_id: string;
  repo_name: string;
  events: { id: string; event_name: string }[];
} {
  return {
    repo_id: subscription.repo_id,
    repo_name: subscription.repo_name,
    events: subscription.events
      ? subscription.events.map((event) => ({
        id: event.id,
        event_name: event.name,
      }))
      : [],
  };
}
