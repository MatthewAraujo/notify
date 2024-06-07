import { CheckboxReactHookFormMultiple } from "@/components/form/form";

export default function Page({
  params,
}: {
  params: { username: string; reponame: string };
}) {
  const reponame = params.reponame;
  const username = params.username.split("-")[0];
  const user_id = "a4184fa2-ade6-4301-99a8-d9e3215a15a3";
  const eventss = [
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
    {
      id: 4,
      name: "recents",
    },
    {
      id: 5,
      name: "home",
    },
  ];
  return (
    <div className="mx-auto h-full space-y-8 pt-10">
      <h1 className="text-2xl font-semibold">
        {username}&apos;s {reponame}
      </h1>
      <CheckboxReactHookFormMultiple
        user_id={user_id}
        events={eventss}
        repo_name={reponame}
      />
    </div>
  );
}
