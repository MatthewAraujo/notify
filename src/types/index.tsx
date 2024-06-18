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
  user_id: UUID;
  repo_name: string;
  events: Events[];
}

export interface Events {
  id: string;
  name: string;
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
