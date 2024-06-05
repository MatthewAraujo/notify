"use client";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { handleLogin } from "@/lib/api";
import { GithubIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <Button size="lg" color="ghost" onClick={handleLogin}>
        <Typography variant="p" className="text-black flex">
          <GithubIcon className="mr-2 h-5 w-5" />
          Sign in with GitHub
        </Typography>
      </Button>
    </div>
  );
}
