import { Dashboard } from "@/components/dashboard/dashboard";
import { getUserRepos } from "@/lib/api";

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const username = params.username.split("-")[0];
  const items = await getUserRepos({ username });
  console.log(items);

  return (
    <div className="mx-auto px-10 xl:px-0 h-full space-y-8 w-full">
      <h1 className="text-2xl font-semibold pt-2">
        {username}&apos;s Projects
      </h1>
      <Dashboard username={username} items={items} />
    </div>
  );
}
