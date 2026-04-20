"use client"

import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { RiExternalLinkLine } from 'react-icons/ri';

const Week = () => {
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
    const themes: any = {
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
    <div className="relative overflow-x-auto" >
      {/* THE RED LINE (Current Time Indicator) */}
      <div className="absolute w-full h-[2px] bg-[#FF6633] top-[31.3%] z-30 pointer-events-none flex items-center justify-end">
        <div className="absolute w-2.5 h-2.5 bg-[#FF6633] rounded-full right-0"></div>
        <div className="absolute w-2.5 h-2.5 bg-[#FF6633] rounded-full left-0"></div>
      </div>

      <table className="w-full border-collapse table-fixed">
        <thead>
          <tr className="border-b border-[#EEEFF2]">
            <th className="w-20 p-4 border-r-2 border-[#EEEFF2]">🕒</th>
            {days.map(day => (
              <th key={day} className="p-4 text-[13px] font-semibold border-r-2 border-[#EEEFF2] text-[#404040]">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody >
          {hours.map((hour) => (
            <tr key={hour} className="h-18">
              <td className="text-center  text-[14px] font-bold text-[#404040] border-l-0  border-2 border-[#EEEFF2]  ">{hour}</td>
              {days.map((_, dayIdx) => (
                <td key={dayIdx} className="border-2 border-[#EEEFF2]  last:border-r-0 relative">

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
                            <p className={`text-[11px] mb-1 font-[700] text-[#4D5E80] ${theme.text}`} key={idx} >
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
    </div >
  )
}

const Month = () => {

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const monthAppointments = [
    { start: 12, end: 12, title: "General Consultation", type: "green" },
    { start: 13, end: 13, title: "Dermatology", type: "yellow" },
    { start: 17, end: 17, title: "Telemedicine", type: "yellow" },
    { start: 29, end: 29, title: "General Consultation", type: "pink" },
  ];

  const getStyles = (type: any) => {
    const themes: any = {
      green: {
        base: "bg-[#F2FBF5]",
        border: "border-[#4ADE80]",
        text: "text-green-800",
      },
      yellow: {
        base: "bg-[#FFFBEB]",
        border: "border-[#FACC15]",
        text: "text-amber-900",
      },
      pink: {
        base: "bg-[#FFF1F2]",
        border: "border-[#FB7185]",
        text: "text-rose-900",
      },
    };
    return themes[type];
  };

  // Generate calendar cells
  const startDay = 3;
  const totalDays = 31;
  const prevMonthDays = 30;

  const currentMonth = "May";
  const prevMonth = "Apr";
  const nextMonth = "Jun";

  const cells = Array.from({ length: 42 }, (_, index) => {
    if (index < startDay) {
      return {
        date: prevMonthDays - (startDay - 1 - index),
        month: prevMonth,
        isCurrent: false,
      };
    }

    const day = index - startDay + 1;

    if (day <= totalDays) {
      return {
        date: day,
        month: currentMonth,
        isCurrent: true,
      };
    }

    return {
      date: day - totalDays,
      month: nextMonth,
      isCurrent: false,
    };
  });

  const rows = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return (
    <div className="overflow-x-auto relative px-1">
      <div className="absolute w-full h-[2px] bg-[#FF6633] left-0 top-[47%] z-30 pointer-events-none flex items-center justify-end">
        <div className="absolute w-2.5 h-2.5 bg-[#FF6633] rounded-full right-0"></div>
        <div className="absolute w-2.5 h-2.5 bg-[#FF6633] rounded-full left-0"></div>
      </div>
      <table className="w-full border-collapse table-fixed  ">
        {/* HEADER */}
        <thead>
          <tr className="border-[#EEEFF2]">
            {days.map((day) => (
              <th
                key={day}
                className="p-4 text-[14px] font-semibold border-r-2 border-[#EEEFF2] last:border-r-0 text-[#404040]"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody >
          {rows.map((week, rowIdx) => (
            <tr key={rowIdx} className="h-30  ">
              {week.map((cell, colIdx) => (
                <td key={colIdx} className="border-2 border-[#EEEFF2] first:border-l-0 last:border-r-0 align-top text-right relative overflow-visible" >
                  {/* Date Number */}
                  {cell && (
                    <div className={`relative text-[20px] p-3 font-[700] mb-1 ${cell.isCurrent ? "text-[#404040]" : "text-[#B2B2B2]"}`} >
                      {cell.date === 1 ? (
                        <> 1 <span className=" ml-1"> {cell.month} </span> </>
                      ) : (
                        cell.date
                      )}
                    </div>
                  )}

                  {/* Events */}
                  <div className="space-y-1 ">
                    {monthAppointments
                      .filter((app) => app.start === cell.date && cell.isCurrent)
                      .map((app, i) => {
                        const theme = getStyles(app.type);

                        return (
                          <div
                            key={i}
                            className={`absolute left-4 bottom-0 h-12 w-[80%] text-[12px] text-start font-bold px-2 py-1 rounded border ${theme.base} ${theme.border} ${theme.text}`}
                          >
                            {app.title}
                          </div>
                        );
                      })}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const Year = () => {
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const [selectedDate, setSelectedDate] = useState({
    day: 18,
    month: "May",
  });

  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-6 p-5">
      {months.map((month) => (
        <div key={month} className="border border-[#E9E9E9] rounded-xl p-6 ">
          <h2 className="text-[14px] font-bold text-[#404040] mb-4">{month}</h2>

          <div className="grid grid-cols-7 text-[11px] text-center text-[#333333] mb-4">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
              <span key={d}>{d}</span>
            ))}
          </div>

          <div className="grid grid-cols-7 text-[11px] text-center gap-1">
            <span className='col-span-3'></span>
            {Array.from({ length: 31 }).map((_, i) => (
              <button key={i}
                // onClick={() => setSelectedDate({ day: i + 1, month: month, })}
                className={`h-8 w-8 text-[#404040]
               ${selectedDate.day === i + 1 && selectedDate.month === month ?
                    "bg-blue-500 text-white rounded-full " : ""
                  }`}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      ))
      }
    </div >
  );
};


const Day = () => {
  const hours = Array.from({ length: 10 }, (_, i) => i + 1); // 9 → 20

  return (
    <div className="flex gap-12 ">

      {/* LEFT SIDE (DAY VIEW) */}
      <div className="flex-1 bg-white rounded-xl p-1 ">
        <div className='px-16 py-5'>
          <h1 className="text-[22px] font-bold"> 12 May 2024</h1>
          <p className="text-[14px] font-semibold  mb-4">Sunday</p>
        </div>
        <div className="relative">
          {hours.map((hour, idx) => (
            <div
              key={idx}
              className="border-t-2 border-[#EEEFF2] h-16 relative"
            >
            </div>
          ))}

          {/* EVENT BLOCK */}
          <div className="absolute top-0 left-16 w-[320px] bg-[#E8F8EE] border border-green-400 rounded-md p-3">
            <div className="flex gap-2 mb-2">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                09:00
              </span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                10:00
              </span>
            </div>

            {/* Title */}
            <p className="text-[13px] font-semibold text-[#4D5E80]">
              General Consultation / Telemedicine / Specialist Visit
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="w-[380px] bg-white rounded-xl p-8 space-y-6">

        {/* Calendar */}
        <div className=''>
          <h2 className="text-[14px] font-bold mb-2">  Weekly Calendar </h2>
          <div className="border border-[#CCDFF2] rounded-xl p-8">
            <div className="flex justify-between items-center mb-6">

              <span className="text-[14px] font-[700] text-[#404040]"> May 2024 </span>
              <div className="flex ">
                <span><MdKeyboardArrowLeft /></span>
                <span><MdKeyboardArrowRight /></span>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-3 text-center font-[500] text-[14px] text-[#333333] ">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                <span key={d}>{d}</span>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i}
                  className={`h-8 w-8 flex items-center justify-center rounded-full cursor-pointer
                    ${i + 1 === 12 ? "bg-blue-500 text-white" : ""}
                  `}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mode */}
        <div className='text-[15px] font-[600] flex gap-16'>
          <p className=" text-[#808080]">Mode</p>
          <p className="flex gap-2"> Online (Zoom link / Chat) <RiExternalLinkLine size={20} className='text-[#2C3CD3]' /> </p>
        </div>

        {/* Status */}
        <div className='text-[15px] font-[600] flex gap-16'>
          <p className=" text-[#808080]">Status</p>
          <span className="bg-[#D7F7C2] text-[#006908] border border-[#A6EB84] font-bold text-xs px-2 py-1 rounded"> Confirmed </span>
        </div>

        {/* Buttons */}
        <div className="flex font-[600] gap-5">
          <button className=" bg-[#F6F6F6] text-[#404040] text-sm py-2 px-4  rounded">  Reschedule </button>
          <button className=" bg-[#E20909] text-white text-sm py-2 px-4 rounded">  Cancel Booking </button>
        </div>
      </div>
    </div>
  );
};

const CalendarUI = () => {

  const [selected, setSelected] = useState("Week");

  return (
    <div className="p-8 font-inter min-h-screen bg-white">
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
              <button key={v}
                onClick={() => setSelected(v)}
                className={`px-4 py-1.5 border border-[#EEEFF2] rounded-md text-[12px] font-bold ${v === selected ? 'text-[#404040] bg-gray-50' : 'text-[#B3B3B3]'}`}>
                {v}
              </button>
            ))}
          </div>
        </div>
        {selected === "Week" && <Week />}
        {selected === "Month" && <Month />}
        {selected === "Year" && <Year />}
        {selected === "Day" && <Day />}
      </div>
    </div >
  );
};

export default CalendarUI;