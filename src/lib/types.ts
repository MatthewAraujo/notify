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
