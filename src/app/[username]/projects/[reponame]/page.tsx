import { CheckboxReactHookFormMultiple } from "@/components/form/form";
import { getSubscriptionByRepo } from "@/lib/api";

<<<<<<< HEAD
export default async function Page({ params }: { params: { reponame: string } }) {
  const reponame = params.reponame;
  const subscription = await getSubscriptionByRepo({ reponame });

=======
export default function Page({
  params,
}: {
  params: { username: string; reponame: string };
}) {
  const reponame = params.reponame;
  const username = params.username.split("-")[0];
  const user_id = "a4184fa2-ade6-4301-99a8-d9e3215a15a3";
  const events = [
    {
      id: 1,
      name: "push",
    },
    {
      id: 2,
      name: "pull_request",
    },
    {
      id: 3,
      name: "issues",
    },
  ];
>>>>>>> refs/remotes/origin/main
  return (
    <div className="mx-auto h-full max-w-2xl w-full space-y-8 pt-10">
      <h1 className="text-2xl font-semibold">
        {username}&apos;s {reponame}
      </h1>
<<<<<<< HEAD
      <CheckboxReactHookFormMultiple user_id={subscription.user_id} repo_name={reponame} events={subscription.events} />
=======
      <CheckboxReactHookFormMultiple
        user_id={user_id}
        events={events}
        repo_name={reponame}
      />
>>>>>>> refs/remotes/origin/main
    </div>
  );
}
