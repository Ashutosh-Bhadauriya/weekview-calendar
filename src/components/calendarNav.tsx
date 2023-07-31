import React from 'react';

interface CalendarNavProps {
  onPrevious: () => void;
  onNext: () => void;
}

const CalendarNav: React.FC<CalendarNavProps> = ({ onPrevious, onNext }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-2 sm:p-4 border-b border-gray-200">
      <button className="bg-blue-500 text-white py-2 px-4 rounded mb-2 sm:mb-0" onClick={onPrevious}>
        Previous
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default CalendarNav;
