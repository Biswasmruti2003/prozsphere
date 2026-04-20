import React from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

const CalendarUI = () => {
  const days = ['Monday 12', 'Tuesday 13', 'Wednesday 14', 'Thursday 15', 'Friday 16', 'Saturday 17', 'Sunday 18'];
  const hours = ['09', '10', '11', '12', '01', '02', '03', '04', '05', '06', '07', '08'];

  // 1. DATA: This would usually come from your API
  const appointmentData = [
    { dayIdx: 0, startHour: '09', endHour: '11', duration: 2, title: ['General Consultation', 'General Consultation /', ' Telemedicine /', 'Specialist Visit'], doctor: 'Rahul Menon', type: 'green' },
    { dayIdx: 3, startHour: '10', endHour: '12', duration: 2.2, title: ['Dermatology'], doctor: 'Priya Sharma', type: 'yellow' },
    { dayIdx: 4, startHour: '10', endHour: '12', duration: 2, title: ['General Consultation', 'General Consultation /', ' Telemedicine /', 'Specialist Visit'], doctor: 'Priya Sharma', type: 'green' },
    { dayIdx: 1, startHour: '01', endHour: '03', duration: 2.2, title: ['Dermatology'], doctor: 'Priya Sharma', type: 'yellow' },
    { dayIdx: 2, startHour: '03', endHour: '05', duration: 2.2, title: ['Surgery'], doctor: '', type: 'pink' },
    { dayIdx: 6, startHour: '03', endHour: '05', duration: 2, title: ['General Consultation', 'General Consultation /', ' Telemedicine /', 'Specialist Visit'], doctor: 'Ravi Kumar', type: 'green' },
    { dayIdx: 0, startHour: '05', endHour: '07', duration: 2, title: ['General Consultation', 'General Consultation /', ' Telemedicine /', 'Specialist Visit'], doctor: 'Rahul Menon', type: 'green' },
  ];

  // 2. HELPER: Styles for different appointment types
  const getStyles = (type: any) => {
    const themes = {
      green: {
        base: "bg-[#F2FBF5]",
        border: "border-[#4ADE80]",
        text: "text-green-800",
        badge: "bg-[#29CC39] text-white",
      },
      yellow: {
        base: "bg-[#FFFBEB]",
        border: "border-[#FACC15]",
        text: "text-amber-900",
        badge: "bg-[#FFCB33] text-white",
      },
      pink: {
        base: "bg-[#FFF1F2]",
        border: "border-[#FB7185]",
        text: "text-rose-900",
        badge: "bg-[#E62E7B] text-white",
      },
    };
    return themes[type] || themes.green;
  };
  return (
    <div className="p-8 font-inter bg-white">
      <div className="max-w-6xl rounded-xl border border-[#E9E9E9] overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h1 className="text-[24px] font-bold text-black">Calendar</h1>
          <div className="flex items-center gap-5">
            <button className="p-2 border border-[#EEEFF2] rounded-full text-[#C3CAD9] hover:bg-gray-50"><MdOutlineArrowBackIos /></button>
            <span className="text-[#404040] text-[12px] font-bold">May 21 - 26, 2024</span>
            <button className="p-2 border border-[#EEEFF2] rounded-full text-[#C3CAD9] hover:bg-gray-50"><MdOutlineArrowForwardIos /></button>
          </div>
          <div className="flex gap-2">
            {['Year', 'Month', 'Week', 'Day'].map((v) => (
              <button key={v} className={`px-4 py-1.5 border border-[#EEEFF2] rounded-md text-[12px] font-bold ${v === 'Week' ? 'text-[#404040] bg-gray-50' : 'text-[#B3B3B3]'}`}>
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="relative overflow-x-auto">
          <table className="w-full border-collapse border-2 border-[#EEEFF2] table-fixed">
            <thead>
              <tr className="border-b border-[#EEEFF2]">
                <th className="w-20 p-4 border-r border-[#EEEFF2]">🕒</th>
                {days.map(day => (
                  <th key={day} className="p-4 text-[13px] font-semibold border-r border-[#EEEFF2] text-[#404040]">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody className="relative">
              {/* THE RED LINE (Current Time Indicator) */}
              {/* You can adjust 'top' dynamically based on current time */}
              <div className="absolute w-full h-[2px] bg-[#FF6633] top-[31.3%] z-30 pointer-events-none flex items-center justify-end">
                <div className="absolute w-2.5 h-2.5 bg-[#FF6633] rounded-full right-0"></div>
                <div className="absolute w-2.5 h-2.5 bg-[#FF6633] rounded-full left-0"></div>
              </div>

              {hours.map((hour) => (
                <tr key={hour} className="border-b border-[#EEEFF2] h-18">
                  <td className="text-center  text-[14px] font-bold text-[#404040] border-r  border-2 border-[#EEEFF2]  ">{hour}</td>
                  {days.map((_, dayIdx) => (
                    <td key={dayIdx} className="border-r border-2 border-[#EEEFF2]  last:border-r-0 relative">

                      {/* DYNAMIC RENDERER */}
                      {appointmentData
                        .filter(app => app.dayIdx === dayIdx && app.startHour === hour)
                        .map((app, i) => {
                          const theme = getStyles(app.type);

                          return (
                            <div
                              key={i}
                              style={{ height: `${app.duration * 135}%` }} // Dynamic height based on duration
                              className={`w-[95%] mx-auto absolute space-y-4 inset-x-1 top-0.5 z-20 border rounded-lg p-2 shadow-sm ${theme.base} ${theme.border}`}
                            >
                              <div className="w-full grid grid-cols-2 mb-2 text-center gap-2">
                                <div className={`text-[12px] px-1 rounded-md font-bold ${theme.badge}`}>
                                  {app.startHour}:00
                                </div>
                                <div className={`text-[12px] px-1 rounded-md font-bold ${theme.badge}`}>
                                  {app.endHour}:00
                                </div>
                              </div>
                              {app.title.map((el, idx) => (
                                <p className={`text-[11px] mb-1 font-[700] text-[#4D5E80] ${theme.text}`}>
                                  {el}
                                </p>
                              ))}
                              <p className="text-[13px] font-[700] absolute bottom-4">{app.doctor}</p>
                            </div>
                          );
                        })}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
};

export default CalendarUI;