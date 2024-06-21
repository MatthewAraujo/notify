import { SubscriptionProps, SubscriptionFormProps, Events, NotificationEdit, NotificationProps } from "@/types";

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


export const createSubscription = async (data: NotificationProps) => {
  const res = await fetch(`${url}/notification`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res
}

export const updateSubscription = async (data: NotificationEdit) => {
  const res = await fetch(`${url}/notification/${data.notificationSubscription}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  return res.ok;
}