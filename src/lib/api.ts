import { SubscriptionFormProps, UserInfo } from "@/types";

export const url = "http://localhost:8080/api/v1";

export const handleLogin = async () => {
  window.location.href = `${url}/auth/github`;
};

interface SubscriptionProps {
  repo_id: string;
  repo_name: string;
  events: {
    id: string;
    event_name: string;
  }[];
}

interface UsernameProps {
  username: string;
}

export const getUserRepos = async ({ username }: UsernameProps) => {
  const res = await fetch(`${url}/repository/${username}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return data as SubscriptionProps[];
};

export const getSubscriptionByRepo = async ({
  reponame,
}: {
  reponame: string;
}) => {
  const items: SubscriptionFormProps = {
    user_id: "eee5a383-a80a-4990-9978-b1baf7d2f9c8",
    repo_name: reponame,
    events: [
      {
        id: "1",
        name: "event1",
      },
      {
        id: "2",
        name: "event2",
      },
    ],
  };

  // const res = await fetch(`${url}/repos/${reponame}/subscriptions`)
  // const data = await res.json()
  return items;
};

export const getAllEvents = () => {
  const items = [
    {
      id: "1",
      name: "event1",
    },
    {
      id: "2",
      name: "event2",
    },
    {
      id: "3",
      name: "event3",
    },
    {
      id: "4",
      name: "event4",
    },
    {
      id: "5",
      name: "event5",
    },
    {
      id: "6",
      name: "event6",
    },
    {
      id: "7",
      name: "event7",
    },
    {
      id: "8",
      name: "event8",
    },
    {
      id: "9",
      name: "event9",
    },
    {
      id: "10",
      name: "event10",
    },
  ];
  return items;
};
