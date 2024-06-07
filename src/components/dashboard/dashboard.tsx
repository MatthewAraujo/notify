import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { HelpingHand, LucideGithub } from "lucide-react";
import Typography from "@/components/ui/typography";
import Link from "next/link";


interface SubscriptionProps {
  id: number,
  reponame: string,
  events: {
    id: number,
    name: string,
  }[],
}


export function Dashboard() {
  const items: SubscriptionProps[] = [
    {
      id: 1,
      reponame: "repo1",
      events: [
        {
          id: 1,
          name: "event1",
        },
        {
          id: 2,
          name: "event2",
        },
      ],
    },
    {
      id: 2,
      reponame: "repo2",
      events: [
        {
          id: 1,
          name: "event1",
        },
        {
          id: 2,
          name: "event2",
        },
      ],
    },
    {
      id: 3,
      reponame: "repo3",
      events: [
        {
          id: 1,
          name: "event1",
        },
        {
          id: 2,
          name: "event2",
        },
      ],
    },
    {
      id: 4,
      reponame: "repo4",
      events: [
        {
          id: 1,
          name: "event1",
        },
        {
          id: 2,
          name: "event2",
        },
      ],
    },
    {
      id: 5,
      reponame: "repo5",
      events: [
        {
          id: 1,
          name: "event1",
        },
        {
          id: 2,
          name: "event2",
        },
      ],
    },

  ];

  const username = "Omar";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
      {
        items.map((item) => (
          <Link
            // Omar-projects/projects/repo1
            href={`[username]-projects/projects/[reponame]`}
            as={`/${username}-projects/projects/${item.reponame}`}
            key={item.id}
            className="cursor-pointer"
          >
            <Card x-chunk="dashboard-01-chunk-0" className="hover:border hover:border-gray-500 transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">
                  {item.reponame}
                </CardTitle>
                <HelpingHand className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {item.events.map((event) => (
                  <Typography variant="span" className="text-xs text-muted-foreground">
                    <Badge variant="outline">{event.name}</Badge>
                  </Typography>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between">
                <CardDescription>
                  <Typography variant="span" className="text-xs text-muted-foreground">
                    {item.events.length} events subscribed
                  </Typography>
                </CardDescription>
                <div className="flex flex-row items-center justify-between space-x-2">
                  <LucideGithub className="h-4 w-4 text-muted-foreground" />
                  <Typography variant="span" className="text-xs text-muted-foreground">
                    <Link href="">
                      View on Github
                    </Link>
                  </Typography>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))
      }
    </div>
  )
}
