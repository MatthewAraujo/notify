import { ServerEventsLoader } from "@/components/form/ServerEventsLoader";
import { getSubscriptionByRepo } from "@/lib/api";

export default async function Page({
  params,
}: {
  params: { reponame: string };
}) {
  const reponame = params.reponame;
  const subscription: any = await getSubscriptionByRepo({ reponame });
  return (
    <div className="mx-auto h-full max-w-2xl w-full space-y-8 pt-10">
      <ServerEventsLoader user_id={subscription.user_id} repo_name={reponame} events={subscription.events} notificationSubscription={subscription.notification_subscription_id} />

    </div>
  );
}
