"use client";

import Footer from "@/components/footer";
import Heading from "@/components/heading";
import PatientDetails from "@/components/patientDetails";
import { useState } from "react";
import { LiaFilterSolid } from "react-icons/lia";
import { PiCalendarCheck } from "react-icons/pi";
import { RiGroup2Line, RiSearch2Line, RiStarHalfSLine, RiUserAddLine } from "react-icons/ri";

const patientsData = [
  {
    name: "Anjali Menon",
    service: "General Consultation",
    last: "02 Aug 2025",
    follow: "20 Aug 2025",
    status: "Active",
    score: 5.0,
  },
  {
    name: "Rajesh Kumar",
    service: "Cardiology Review",
    last: "29 Jul 2025",
    follow: "15 Aug 2025",
    status: "Follow-up",
    score: 4.8,
  },
  {
    name: "Sneha Pillai",
    service: "Orthopedic Check-up",
    last: "31 Jul 2025",
    follow: "18 Aug 2025",
    status: "Active",
    score: 4.5,
  },
  {
    name: "Mohammed Aslam",
    service: "Pediatrics",
    last: "03 Aug 2025",
    follow: null,
    status: "Active",
    score: 4.9,
  },
  {
    name: "Priya Varghese",
    service: "Skin Allergy Treatment",
    last: "28 Jul 2025",
    follow: "12 Aug 2025",
    status: "Discharged",
    score: 4.6,
  },
  {
    name: "Suresh Nair",
    service: "Dental Cleaning",
    last: "01 Aug 2025",
    follow: null,
    status: "Active",
    score: 4.7,
  },
];

const cards = [
  { value: 248, label: "Total Active Patients", icon: RiGroup2Line, color: "#C084FC" },
  { value: 36, label: "New Patients This Month", icon: RiUserAddLine, color: "#2EAC2B" },
  { value: 52, label: "Follow-ups Scheduled", icon: PiCalendarCheck, color: "#605BFF" },
  { value: 4.7, label: "Avg. Consultation Rating", icon: RiStarHalfSLine, color: "#FF5757" },
]

export default function Dashboard() {

  const getStatusStyle = (status: any) => {
    switch (status) {
      case "Active":
        return "bg-[#D7F7C2] text-[#006908] border-[#A6EB84]";
      case "Follow-up":
        return "bg-[#FCEDB9] text-[#A82C00] border-[#FCD579]";
      case "Discharged":
        return "bg-[#FFE7F2] text-[#B3093C] border-[#FFCCDF]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const heading = "Client Engagement"

  return (
    <div className="min-h-screen font-inter relative">
      <Heading heading={heading}/>
      <PatientDetails  />
      {/* Table */}
      <div className=" overflow-hidden">
        <table className="w-full text-left ">
          <thead className="p-30">
            <tr className=" text-[#718096] text-[16px] font-[500] leading-[150%] tracking-[0.2px]">
              <td className="py-5 px-10">Patient Name</td>
              <td className="py-5 px-10">Last Consultation</td>
              <td className="py-5 px-10">Service Type</td>
              <td className="py-5 px-10">Follow-up Date</td>
              <td className="">Status</td>
              <td className="py-5 px-10">Feedback Score</td>
            </tr>
          </thead>

          <tbody>
            {patientsData.map((p, index) => (
              <tr key={index} className="border-t border-[#EEEFF2] text-[15px] font-[600] leading-[150%] tracking-[0.3px]">
                <td className="py-4 px-10 ">{p.name}</td>
                <td className="py-4 px-10">{p.service}</td>
                <td className="py-4 px-10">{p.last}</td>
                <td className="py-4 px-10">{p.follow !== null ? p.follow : (<div className="w-[15px] border"></div>)}</td>
                <td className="">
                  <div
                    className={`text-center rounded-md  text-[12px] ${getStatusStyle(
                      p.status
                    )}`}
                  >
                    {p.status}
                  </div>
                </td>
                <td className="px-10">{p.score}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}