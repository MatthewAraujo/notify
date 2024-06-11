"use server";
import { cookies } from "next/headers";

export async function getUser() {
  const user = cookies().get("user")?.value;
  if (!user) return null;
  return user;
}

export async function setUser(user: string) {
  cookies().set("user", user);
}
