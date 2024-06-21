"use client";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  function handleInstallation() {
    router.push(
      "https://github.com/apps/notify-app-matthew/installations/select_target"
    );
  }

  return (
    <div className="mx-auto max-w-sm  md:max-w-lg space-y-6 text-center">
      <Typography variant="h2" className="text-center">
        Get GitHub Repository Notifications
      </Typography>
      <Button size="lg" color="ghost" onClick={handleInstallation}>
        <Typography variant="p" className="text-black flex">
          Get Started
        </Typography>
      </Button>
    </div>
  );
}
