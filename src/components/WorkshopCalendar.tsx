import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Workshop } from '../types';
import { Palette, PenTool, Scissors, Hammer, Leaf } from 'lucide-react';

interface WorkshopCalendarProps {
  workshops: Workshop[];
  onDateSelect: (date: Date) => void;
}

const WorkshopCalendar: React.FC<WorkshopCalendarProps> = ({ workshops, onDateSelect }) => {
  const [value, setValue] = useState<Date>(new Date());

  const handleDateChange = (date: Date | Date[]) => {
    const selectedDate = Array.isArray(date) ? date[0] : date;
    setValue(selectedDate);
    onDateSelect(selectedDate);
  };

  const getTileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return null;

    const dateStr = date.toISOString().split('T')[0]; // 'YYYY-MM-DD'
    const workshopsOnDay = workshops.filter(
      workshop => new Date(workshop.date).toISOString().split('T')[0] === dateStr
    );

    if (workshopsOnDay.length === 0) return null;

    return (
      <div className="flex justify-center mt-1">
        {workshopsOnDay.map((workshop, index) => {
          let WorkshopIcon;
          switch (workshop.type) {
            case 'pottery':
              WorkshopIcon = <Hammer size={14} className="text-amber-600" />;
              break;
            case 'painting':
              WorkshopIcon = <Palette size={14} className="text-indigo-600" />;
              break;
            case 'weaving':
              WorkshopIcon = <Scissors size={14} className="text-blue-600" />;
              break;
            case 'blockprinting':
              WorkshopIcon = <PenTool size={14} className="text-green-600" />;
              break;
            case 'embroidery':
              WorkshopIcon = <Scissors size={14} className="text-pink-600" />;
              break;
            case 'woodworking':
              WorkshopIcon = <Hammer size={14} className="text-yellow-800" />;
              break;
            default:
              WorkshopIcon = <Leaf size={14} className="text-green-600" />;
          }

          return <div key={index} className="mx-0.5">{WorkshopIcon}</div>;
        })}
      </div>
    );
  };

  // Custom tile class for selected date
  const tileClassName = ({ date }: { date: Date }) => {
    return date.toDateString() === value.toDateString() ? 'bg-amber-600 text-white' : '';
  };

  return (
    <div className="w-full font-sans">
      <Calendar
        onChange={(date) => handleDateChange(date as Date | Date[])}
        value={value}
        tileContent={getTileContent}
        tileClassName={tileClassName}
      />

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-3 justify-center text-sm">
        <div className="flex items-center">
          <Hammer size={16} className="text-amber-600 mr-1" />
          <span>Pottery</span>
        </div>
        <div className="flex items-center">
          <Palette size={16} className="text-indigo-600 mr-1" />
          <span>Painting</span>
        </div>
        <div className="flex items-center">
          <Scissors size={16} className="text-blue-600 mr-1" />
          <span>Weaving</span>
        </div>
        <div className="flex items-center">
          <PenTool size={16} className="text-green-600 mr-1" />
          <span>Block Printing</span>
        </div>
        <div className="flex items-center">
          <Scissors size={16} className="text-pink-600 mr-1" />
          <span>Embroidery</span>
        </div>
        <div className="flex items-center">
          <Hammer size={16} className="text-yellow-800 mr-1" />
          <span>Woodworking</span>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCalendar;
