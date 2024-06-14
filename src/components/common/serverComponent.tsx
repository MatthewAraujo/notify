import { UserProps, getUser, getUserInfo } from "@/lib/cookies";

interface ServerComponentProps {
  children: (props: {
    user: string | null;
    userInfo: UserProps;
  }) => JSX.Element;
}

export default async function ServerComponent({ children }: ServerComponentProps) {
  const user = await getUser();
  let userInfo: UserProps | null = null;

  if (user) {
    userInfo = await getUserInfo(user);
  }
  console.log(userInfo);
  return children({ user, userInfo });
}