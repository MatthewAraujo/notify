import { UUID } from "crypto";

export interface UserInfo {
  username: string
  avatar_url: string
}

export interface SubscriptionProps {
  id: UUID;
  reponame: string;
  events: {
    id: UUID;
    name: string;
  }[];
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
