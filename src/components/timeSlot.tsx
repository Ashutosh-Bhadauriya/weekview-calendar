import React from 'react';

interface TimeSlotProps {
  hour: number;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ hour }) => {
  return (
    <div className="border-b border-gray-200 h-12 flex items-center justify-end sm:pr-2 text-xs sm:text-sm md:text-base text-gray-500">
      {hour}:00
    </div>
  );
};

export default TimeSlot;