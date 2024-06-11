import { CheckboxReactHookFormMultiple } from "@/components/form/form";
import { getSubscriptionByRepo } from "@/lib/api";

export default async function Page({ params }: { params: { reponame: string } }) {
  const reponame = params.reponame;
  const subscription = await getSubscriptionByRepo({ reponame });

  return (
    <div className="mx-auto h-full space-y-8 ">
      <h1 className="text-2xl font-semibold">
        {" "}
        Create notify for your {params.reponame}
      </h1>
      <CheckboxReactHookFormMultiple user_id={subscription.user_id} repo_name={reponame} events={subscription.events} />
    </div>
  );
}
