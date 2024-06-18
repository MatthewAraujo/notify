"use server";
import { url } from "./api";
import { UserInfo } from "@/types";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export default async function getUser() {
  const cookieStore = cookies();
  const username = cookieStore.get("username");

  if (username == undefined) {
    return null;
  }

  return username;
}

interface UserProps {
  username: string;
}

export const getUserInfo = async ({ username }: UserProps) => {
  const res = await fetch(`${url}/user/${username}`);
  if (!res.ok) {
    return { username: "", avatar_url: "" };
  }
  const data = await res.json();
  return data as UserInfo;
};
