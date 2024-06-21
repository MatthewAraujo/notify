import { UUID } from "crypto";

export interface UserInfo {
  username: string;
  avatar_url: string;
}

export interface SubscriptionProps {
  repo_id: string;
  repo_name: string;
  events: { id: string; name: string }[] | null;
}

export interface SubscriptionFormProps {
  user_id: string;
  reponame: string;
  events: Events[];
}

export interface Events {
  id: string;
  event_name: string;
  description: string;
}

export interface DashboardProps {
  username: string;
  items: {
    repo_id: string;
    repo_name: string;
    events: {
      id: string;
      event_name: string;
    }[];
  }[];
}

export interface NotificationProps {
  user_id: string;
  repo_name: string;
  events: string[];
}

export interface NotificationEdit {
  notificationSubscription: string;
  user_id: string;
  repo_name: string;
  events: EventsEdit;
}

interface EventsEdit {
  added: string[];
  removed: string[];
}