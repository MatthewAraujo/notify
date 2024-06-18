import { CheckboxReactHookFormMultiple } from "@/components/form/form";
import { getSubscriptionByRepo } from "@/lib/api";

export default async function Page({
  params,
}: {
  params: { reponame: string };
}) {
  const reponame = params.reponame;
  const subscription = await getSubscriptionByRepo({ reponame });
  console.log(subscription);
  return (
    <div className="mx-auto h-full max-w-2xl w-full space-y-8 pt-10">
      {/* <CheckboxReactHookFormMultiple
        user_id={subscription.user_id}
        repo_name={reponame}
        events={subscription.events}
      /> */}
    </div>
  );
}
