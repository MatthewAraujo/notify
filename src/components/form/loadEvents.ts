// lib/loadEvents.ts
import { getAllEvents } from "@/lib/api";

export async function loadEvents() {
  const items = await getAllEvents();
  return items;
}
