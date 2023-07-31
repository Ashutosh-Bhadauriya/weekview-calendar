import React from 'react';
import { Event } from '../utils/stubGenerator';

interface DayColumnProps {
  date: Date;
  events: Event[];
}

const DayColumn: React.FC<DayColumnProps> = ({ date, events }) => {
  return (
    <div className="bg-white p-2 sm:p-4 border-r border-b border-gray-200 relative">
      <h2 className="text-sm sm:text-lg font-bold">{date.toDateString()}</h2>
      <div className="mt-4 space-y-4 relative h-[1200px] text-xs">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white p-2 rounded absolute w-full sm:w-44"
            style={{
              top: `${event.startTime * 50}px`,
              height: `${(event.endTime - event.startTime) * 50}px`,
            }}
          >
            <h3 className="font-bold">{event.title}</h3>
            <p>Duration: {event.endTime - event.startTime} hours</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayColumn;
