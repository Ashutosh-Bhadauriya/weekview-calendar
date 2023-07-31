// src/components/Calendar.tsx
import React, { useEffect, useState } from 'react';
import { Event, generateEvents } from '../utils/stubGenerator';
import { saveEvents, loadEvents } from '../utils/db';
import TimeSlot from './timeSlot';
import CalendarNav from './calendarNav';
import DayColumn from './dayColumn';
import { deleteDB } from 'idb';

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    deleteDB('MyDatabase')
      .then(() => {
        const generatedEvents = generateEvents(10, 30);
        saveEvents(generatedEvents)
          .then(() => loadEvents())
          .then(storedEvents => setEvents(storedEvents))
          .catch(err => console.error(err));
      });
  }, [currentDate]);


  const getWeekDates = () => {
    const tempDate = new Date(currentDate);
    return Array(7).fill(0).map(() => {
      const date = new Date(tempDate);
      tempDate.setDate(tempDate.getDate() + 1);
      return date;
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <CalendarNav
        onPrevious={() => setCurrentDate((prevDate) => new Date(prevDate.setDate(prevDate.getDate() - 7)))}
        onNext={() => setCurrentDate((prevDate) => new Date(prevDate.setDate(prevDate.getDate() + 7)))}
      />
      <div className="flex flex-col sm:flex-row">
        <div className="border-r border-gray-200 overflow-auto sm:overflow-visible">
          {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
            <TimeSlot key={hour} hour={hour} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-7 gap-1 flex-grow overflow-auto">
          {getWeekDates().map((date, i) => (
            <DayColumn
              key={i}
              date={date}
              events={events.filter((event) => new Date(event.date).toDateString() === date.toDateString())}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
