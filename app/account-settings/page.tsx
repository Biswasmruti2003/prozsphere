"use client";

import { useState } from "react";
import Security from "@/components/Security";
import Professional from "@/components/Professional";
import NotificationPreference from "@/components/NotificationPreference";
import Profile from "@/components/Profile";

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
    <div className="relative font-inter">
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
        {activeTab === "professional" && <Professional />}
        {activeTab === "notifications" && <NotificationPreference />}
      </div>
    </div>
  );
}
