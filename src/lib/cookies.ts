"use server";
import { url } from "./api";
import { UserInfo } from "@/types";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export default async function getUser() {
  const cookieStore = cookies();
  const username = cookieStore.get("username");

  console.log(username);
  if (username == undefined) {
    return null;
  }

  return { username };
}

interface UserProps {
  username: Promise<{ username: RequestCookie | undefined }>;
}

export const getUserInfo = async ({ username }: UserProps) => {
  const res = await fetch(`${url}/users/${username}`);
  if (!res.ok) {
    return { username: "", avatar_url: "" };
  }
  const data = await res.json();
  return data as UserInfo;
};
