import { CheckboxReactHookFormMultiple } from "@/components/form/form";

export default function Page({ params }: { params: { reponame: string } }) {
  const reponame = params.reponame;
  const user_id = "a4184fa2-ade6-4301-99a8-d9e3215a15a3";
  return (
    <div className="mx-auto h-full space-y-8 ">
      <h1 className="text-2xl font-semibold">
        {" "}
        Create notify for your {params.reponame}
      </h1>
      <CheckboxReactHookFormMultiple user_id={user_id} repo_name={reponame} />
    </div>
  );
}
