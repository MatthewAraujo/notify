"use server";
import { cookies } from "next/headers";
import { url } from "./api";
import { UserInfo } from "@/types";

export async function getUser() {
  const user = cookies().get("username")?.value;
  if (!user) return null;
  console.log(user);
  return user;
}

export interface UserProps {
  username: Promise<string | null>;
}

export const getUserInfo = async ({ username }: UserProps) => {
  const res = await fetch(`${url}/users/${username}`)
  const data = await res.json()
  return data as UserInfo
}