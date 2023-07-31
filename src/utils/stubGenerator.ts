export interface Event {
  title: string;
  date: string;
  startTime: number;
  endTime: number;
}

function generateTitle() {
  const words = [
    "Meeting",
    "Workshop",
    "Lunch",
    "Break",
    "Training",
    "Event",
    "Webinar",
  ];
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export function generateEvents(
  numberOfEvents: number,
  numberOfDays: number
): Event[] {
  const events: Event[] = [];
  for (let i = 0; i < numberOfEvents; i++) {
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * numberOfDays));
    const startTime = Math.floor(Math.random() * 23) + 1;
    const duration = Math.ceil(Math.random() * 3);
    const endTime = Math.min(24, startTime + duration);
    const event: Event = {
      title: generateTitle(),
      date: date.toString(),
      startTime,
      endTime,
    };
    events.push(event);
  }
  return events;
}
