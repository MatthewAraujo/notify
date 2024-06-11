import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import Feature from "./feature";
import { ArrowUpDown, Timer, Workflow } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Get GitHub Repository Notifications
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Notify is designed to make receiving notifications from GitHub
          repositories easier. Choose which notifications you want to receive in
          your email.
        </Typography>
        <Link href="/login">
          <Button size="tiny" variant="ghost">
            {`Get Started`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Notify.dev hero image"
          src="/hero1.png"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Custom Notifications, Less Stress
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Choose Your Notifications"
              description="Select which repositories and types of activities you want to track and receive notifications directly to your email."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="GitHub Compatible"
              description="Fully integrated with GitHub, allowing for easy and quick setup."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Secure for your org"
              description="We keep your data safe by taking top security measures."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Instant setup, no custom code
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Choose the repositories and notifications you want to receive. Get
            emails as soon as there&apos;s any relevant activity.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Notify.dev hero image"
            src="/hero1.png"
          />
        </div>
      </div>
    </div>
  );
}
