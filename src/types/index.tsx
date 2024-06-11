import { UUID } from "crypto"

export interface UserInfo {
  username: string
  email: string
  avatar: string
}

export interface SubscriptionProps {
  id: number,
  reponame: string,
  events: {
    id: number,
    name: string,
  }[],
}

export interface SubscriptionFormProps {
  user_id: UUID,
  repo_name: string,
  events: Events[]
}

export interface Events {
  id: string
  name: string;
}