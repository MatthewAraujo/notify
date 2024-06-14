import getUser, { getUserInfo } from "@/lib/cookies";
import { UserInfo } from "@/types";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

interface ServerComponentProps {
  children: (props: {
    user: Promise<{ username: RequestCookie | null }>;
    userInfo: UserInfo;
  }) => JSX.Element;
}

export default async function ServerComponent({
  children,
}: ServerComponentProps) {
  const user = await getUser();
  console.log(user);
  if (user === null) {
    return children({ user: null, userInfo: { username: "", avatar_url: "" } });
  }

  const userInfo = await getUserInfo({ username: user.username });
  return children({ user, userInfo });
}