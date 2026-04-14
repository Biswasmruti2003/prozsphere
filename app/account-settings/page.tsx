"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { RiEditBoxFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile Information" },
    { id: "security", label: "Security & Login" },
    { id: "professional", label: "Professional Settings" },
    { id: "notifications", label: "Notification Preferences" },
  ];

  const handleNavigation = (tabId: any) => {
    setActiveTab(tabId);
  }
  return (
    <div className="min-h-screen relative font-inter">
      {/* Header */}
      <div className=" px-10">
        <h1 className="text-[28px] font-[700] text-black my-10 ">Account Settings</h1>
        <div className="flex gap-2 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleNavigation(tab.id)}
              className={`px-6 pb-3 text-[16px] font-[500] relative translate-y-[2px] z-10 ${activeTab === tab.id
                ? "text-black border-b-2  border-[#5F259E]"
                : "text-[#808A98]"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className=" border-b-2 border-[#CFD4DA]"></div>
      <div>
        {activeTab === "profile" && <Profile />}
        {activeTab === "security" && <Security />}
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="p-10 max-w-4xl">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[22px] font-[600] text-black">  Profile Information </h2>
        <button className="flex items-center gap-2 bg-[#5F259E] text-white px-4 py-2 rounded-full text-sm font-medium">
          <RiEditBoxFill size={20} /> Edit
        </button>
      </div>
      {/* Profile Image */}
      <div className="flex items-center gap-6 mb-8">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          className="w-[100px] h-[100px] rounded-[20px] object-cover"
          alt="profile"
        />
        <button className="px-4 py-2 border border-[#5F259E] text-[#5F259E] rounded-full text-sm font-medium hover:bg-purple-50">
          Upload / Update
        </button>
      </div>

      {/* Form */}
      <div className="grid grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="text-[16px] text-[#30313D] font-[600]"> Full Name </label>
          <input
            type="text"
            defaultValue="Dr. Arjun Mehta"
            className="mt-2 w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#808080] focus:outline-none focus:ring-2 focus:ring-[#5F259E]"
          />
        </div>

        {/* Professional Title */}
        <div className="relative">
          <label className="text-[16px] text-[#30313D] font-[600]"> Professional Title</label>
          <select className="mt-2 w-full border border-gray-200 rounded-lg px-4 py-3 appearance-none  text-[14px] text-[#808080] focus:outline-none focus:ring-2 focus:ring-[#5F259E]">
            <option>Dermatologist</option>
          </select>
          <IoIosArrowDown className="absolute right-4 bottom-4 scale-110 " />
        </div>

        {/* Languages */}
        <div className="relative">
          <label className="text-[16px] text-[#30313D] font-[600]">
            Languages Spoken
          </label>
          <select className="mt-2 w-full appearance-none  border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#808080]  focus:outline-none focus:ring-2 focus:ring-[#5F259E]">
            <option>English, Hindi, Malayalam</option>
          </select>
          <IoIosArrowDown className="absolute right-4 bottom-4 scale-110 " />
        </div>

        {/* Location */}
        <div className="relative">
          <label className="text-[16px] text-[#30313D] font-[600]">
            Location
          </label>
          <select className="mt-2 w-full appearance-none  border border-gray-200 rounded-lg px-4 py-3 relative  text-[14px] text-[#808080] focus:outline-none focus:ring-2 focus:ring-[#5F259E]">
            <option>Kochi, Kerala, India</option>
          </select>
          <IoIosArrowDown className="absolute right-4 bottom-4 scale-110 " />
        </div>
      </div>

      {/* Bio */}
      <div className="mt-6">
        <label className="text-[16px] text-[#30313D] font-[600]">
          Bio / About You
        </label>
        <textarea
          rows={4}
          className="mt-2 w-full border border-gray-200 rounded-lg px-4 py-3  text-[14px] text-[#808080]  focus:outline-none focus:ring-2 focus:ring-[#5F259E]"
          defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-[22px] font-[600] text-black mb-6">  Contact Information </h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="text-[16px] text-[#30313D] font-[600]"> Email Address </label>
            <input
              type="text"
              defaultValue="k.p.allen@aol.com"
              className="mt-2 w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#808080] focus:outline-none focus:ring-2 focus:ring-[#5F259E]"
            />
          </div>
          <div>
            <label className="text-[16px] text-[#30313D] font-[600]"> Mobile Number </label>
            <input
              type="text"
              defaultValue="(256) 289-9707"
              className="mt-2 w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#808080] focus:outline-none focus:ring-2 focus:ring-[#5F259E]"
            />
          </div>
          <div>
            <label className="text-[16px] text-[#30313D] font-[600]"> Alternate Number </label>
            <input
              type="text"
              defaultValue="(814) 413-9191"
              className="mt-2 w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#808080] focus:outline-none focus:ring-2 focus:ring-[#5F259E]"
            />
          </div>
          {/* Location */}
          <div className="relative">
            <label className="text-[16px] text-[#30313D] font-[600]">  Preferred Contact </label>
            <select className="mt-2 w-full appearance-none  border border-gray-200 rounded-lg px-4 py-3 relative  text-[14px] text-[#808080] focus:outline-none focus:ring-2 focus:ring-[#5F259E]">
              <option>WhatsApp</option>
              <option>LinkedIn</option>
              <option>Facebook</option>
            </select>
            <IoIosArrowDown className="absolute right-4 bottom-4 scale-110 " />
          </div>
        </div>
      </div>
    </div>
  )
}

function Security() {
  return (
    <div className="p-10 max-w-4xl ">
      <h1 className="text-2xl font-bold mb-10">Security & Login</h1>

      <div className="space-y-12">
        {/* Email Section */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-[16px] font-[600] ">Email Address</h2>
            <p className="text-[16px] font-[500] text-[#718096]">The email associated with your Account</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <span className="block font-medium">s.t.sharkey@outlook.com</span>
              <span className="text-green-500 text-sm">Verified</span>
            </div>
            <button className="p-2 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-50">
              {/* <PencilSquareIcon className="w-5 h-5" /> */}
            </button>
          </div>
        </div>

        {/* Password Section */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-[16px] font-[600] ">Password</h2>
            <p className="text-[16px] font-[500] text-[#718096]">Set a unique password to protect your account</p>
          </div>
          <button className="bg-[#5F259E] px-6 py-2.5 rounded-md text-white font-[500] transition-opacity hover:opacity-90"> Change Password </button>
        </div>

        {/* 2-Step Verification Section */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-[16px] font-[600] ">2-Step Verification</h2>
            <p className="text-[16px] font-[500] text-[#718096]">Set a unique password to protect your account</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-14 h-7 bg-gray-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
            Logout
          </button>
          <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}