import { openDB, DBSchema, IDBPDatabase } from "idb";
import { Event } from "./stubGenerator";

interface MyDb extends DBSchema {
  events: {
    key: string;
    value: Event;
  };
}

export async function saveEvents(events: Event[]): Promise<void> {
  const db: IDBPDatabase<MyDb> = await openDB<MyDb>("MyDatabase", 1, {
    upgrade(db) {
      db.createObjectStore("events");
    },
  });

  const tx = db.transaction("events", "readwrite");
  const store = tx.objectStore("events");
  for (const event of events) {
    store.put(event, event.title);
  }
  await tx.done;
}

export async function loadEvents(): Promise<Event[]> {
  const db: IDBPDatabase<MyDb> = await openDB<MyDb>("MyDatabase", 1);

  const tx = db.transaction("events", "readonly");
  const store = tx.objectStore("events");
  const events: Event[] = await store.getAll();

  return events;
}
