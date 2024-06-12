export interface DashboardProps {
  username: string;
  items: {
    id: string;
    reponame: string;
    events: {
      id: string;
      name: string;
    }[];
  }[];
}
