"use client";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { useRouter } from "next/navigation";
import { CircleIcon, FolderIcon, GitBranch } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  function handleInstallation() {
    router.push(
      "https://github.com/apps/notify-app-matthew/installations/select_target"
    );
  }

  return (
    <div className="mx-auto max-w-sm  md:max-w-lg space-y-6">
      <Typography variant="h2" className="text-center">
        Connect installation to Notify
      </Typography>
      <Button size="lg" color="ghost" onClick={handleInstallation}>
        <Typography variant="p" className="text-black flex">
          Github
        </Typography>
      </Button>

      {showRepositories()}
    </div>
  );
}

interface Repository {
  full_name: string;
  name: string;
  owner: {
    login: string;
  };
  html_url: string;
}

function showRepositories() {
  const repos: Repository[] = [
    {
      full_name: "octocat/Hello-World",
      name: "Hello-World",
      owner: {
        login: "octocat",
      },
      html_url: "",
    },
    {
      full_name: "octocat/Hello-World",
      name: "Hello-World",
      owner: {
        login: "octocat",
      },
      html_url: "",
    },
    {
      full_name: "octocat/Hello-World",
      name: "Hello-World",
      owner: {
        login: "octocat",
      },
      html_url: "",
    },
  ];

  return (
    <div className="mx-auto max-w-sm  md:max-w-lg space-y-6">
      <div className="space-y-2">
        {repos.map((repo) => (
          <div className="flex items-center justify-between bg-[#333333] rounded-md p-2">
            <div className="flex items-center">
              <GitBranch className="text-gray-400 h-5 w-5" />
              <span className="ml-2">{repo.name} - 22h ago</span>
            </div>
            <Button size="tiny" color="ghost">
              <Typography variant="p" className="text-black">
                <Link href={`/installation/${repo.name}`}>Notify</Link>
              </Typography>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
