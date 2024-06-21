import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { HelpingHand, LucideGithub } from "lucide-react";
import Typography from "@/components/ui/typography";
import Link from "next/link";
import { DashboardProps } from "@/types";

export async function Dashboard({ username, items }: DashboardProps) {
  const maxEventsToShow = 3;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
      {items.map((item) => (
        <Link
          href={`[username]-projects/projects/[reponame]`}
          as={`/${username}-projects/projects/${item.repo_name}`}
          key={item.repo_id}
          className="cursor-pointer"
        >
          <Card
            x-chunk="dashboard-01-chunk-0"
            className="hover:border hover:border-gray-500 transition-all"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                {item.repo_name}
              </CardTitle>
              <HelpingHand className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex gap-2">
              {item.events?.slice(0, maxEventsToShow).map((event, index) => (
                <Typography
                  key={event.id}
                  variant="span"
                  className="text-xs text-muted-foreground"
                >
                  <Badge variant="outline">{event.event_name}</Badge>
                </Typography>
              ))}
              {item.events?.length > maxEventsToShow && (
                <Typography
                  variant="span"
                  className="text-xs text-muted-foreground"
                >
                  +{item.events?.length - maxEventsToShow} more
                </Typography>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <CardDescription>
                <Typography
                  variant="span"
                  className="text-xs text-muted-foreground"
                >
                  {item.events?.length > 0
                    ? item.events?.length === 1
                      ? "1 event subscribed"
                      : `${item.events?.length} events subscribed`
                    : "Not subscribed"}
                </Typography>
              </CardDescription>
              <div className="flex flex-row underline items-center justify-between space-x-2">
                <LucideGithub className="h-4 w-4 text-muted-foreground" />
                <Typography
                  variant="span"
                  className="text-xs text-muted-foreground"
                >
                  <Link href="">View on Github</Link>
                </Typography>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
