import { Events, SubscriptionFormProps, SubscriptionProps } from "@/types";
import console from "console";

export const url = "http://localhost:8080/api/v1";

export const handleLogin = async () => {
  window.location.href = `${url}/auth/github`;
};

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

export const getSubscriptionByRepo = async ({ reponame }: { reponame: string }) => {
  const res = await fetch(`${url}/events/${reponame}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return [];
  }
  const data = await res.json();
  if (!data) {
    return [];
  }

  if (!data.events) {
    data.events = [];
  }

  return data as SubscriptionFormProps;
}

export const getAllEvents = async () => {
  const res = await fetch(`${url}/events`);
  const data = await res.json();
  return data as Events[];
};


export const createSubscription = async (data: Notification) => {
  const res = await fetch(`${url}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.ok;
}

export const updateSubscription = async (data: SubscriptionFormProps) => {
  const res = await fetch(`${url}/events`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.ok;
}