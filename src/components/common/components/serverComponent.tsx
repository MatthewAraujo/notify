import getUser, { getUserInfo } from "@/lib/cookies";
import { UserInfo } from "@/types";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

interface ServerComponentProps {
  children: (props: {
    user: RequestCookie | null;
    userInfo: UserInfo;
  }) => JSX.Element;
}

export default async function ServerComponent({
  children,
}: ServerComponentProps) {
  const user = await getUser();
  if (user === null) {
    return children({ user: null, userInfo: { avatar_url: "", username: "" } });
  }
  const userInfo = await getUserInfo({ username: user.value });
  return children({ user, userInfo });
}
