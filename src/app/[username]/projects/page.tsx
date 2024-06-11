import { Dashboard } from "@/components/dashboard/dashboard";

export default function Page({ params }: { params: { username: string } }) {
  const username = params.username.split("-")[0];
  return (
    <div className="mx-auto px-10 xl:px-0 h-full space-y-8 w-full">
      <h1 className="text-2xl font-semibold pt-2">
        {" "}
        {username}&apos;s Projects
      </h1>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}
