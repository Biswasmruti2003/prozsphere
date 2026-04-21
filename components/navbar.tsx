'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiCalendarEventLine, RiChat1Line, RiGroupLine, RiHeartAddLine } from "react-icons/ri";

// ── Import the profile dropdown card ──────────────────────────────────────────
import UserProfileDropdown from './user';
import { MdDashboard } from 'react-icons/md';
import { LuCircleDollarSign } from 'react-icons/lu';
import { IoIosStarOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';

// ── Navigation items ──────────────────────────────────────────────────────────
const navItems = [
  { name: 'Dashboard', icon: MdDashboard, href: '/' },
  { name: 'Service Management', icon: RiHeartAddLine, href: '/service-management' },
  { name: 'Client Engagement', icon: RiGroupLine, href: '/client-engagement' },
  { name: 'Messages', icon: RiChat1Line, href: '/messages' },
  { name: 'Payments & Earnings', icon: LuCircleDollarSign, href: '/payments-and-earnings' },
  { name: 'Reviews & Ratings', icon: IoIosStarOutline, href: '/reviews-and-ratings' },
  { name: 'Calendar', icon: RiCalendarEventLine, href: '/calendar' },
  { name: 'Account Settings', icon: IoSettingsOutline, href: '/account-settings' },
];

// ── Navbar component ──────────────────────────────────────────────────────────
const Navbar = () => {
  const pathname = usePathname();

  // Controls whether the UserProfileDropdown is visible
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Toggle the dropdown open/closed
  const handleProfileClick = () => {
    setShowProfileDropdown((prev) => !prev);
  };

  // Close the dropdown (passed as callback to the dropdown card)
  const handleCloseDropdown = () => {
    setShowProfileDropdown(false);
  };

  return (
    // ── Wrap in a relative container so the dropdown can be positioned ──
    <div className="relative">
      <aside className="w-[320px] bg-[#FCFDFF] h-screen border-r border-[#E9E9E9] flex flex-col overflow-y-auto">

        {/* ── Logo Section ── */}
        <div className="pt-8 pb-8 px-6 flex items-center">
          <img
            src="/prozspherelogo.png"
            alt="Prozsphere"
            className="h-9 w-auto object-contain"
          />
        </div>

        {/* ── Menu Label ── */}
        <div className="px-7 lg:px-9 pb-3">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Menu</span>
        </div>

        {/* ── Nav Items ── */}
        <nav className="flex-1 px-4 lg:px-6 space-y-1">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            let Icon = item.icon
            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-md font-semibold transition-colors
                  ${isActive ? 'bg-[#5B21B6] text-white' : 'text-[#4A5568] hover:bg-gray-50'}
                `}
              >
                <span className={`${isActive ? 'bg-[#5B21B6] text-white' : 'text-[#3C3C3C] hover:bg-gray-100'}`}><Icon size={22} /></span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* ── Profile Section ─────────────────────────────────────────────────
            Clicking this area opens/closes the UserProfileDropdown card.
            The chevron flips direction to indicate open state.
        ── */}
        <div className="p-6 lg:p-8 border-t border-[#FAFAFA] mt-auto">
          <div
            className="flex items-center gap-5 cursor-pointer select-none"
            onClick={handleProfileClick}
            title="View profile options"
          >
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0">
              <img
                src="/profile1.png"
                alt="Dr. Arjun Mehta"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name + email */}
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-gray-900 truncate">Dr. Arjun Mehta</p>
              <p className="text-sm text-gray-500 truncate">k.p.allen@aol.com</p>
            </div>

            {/* Chevron – rotates when dropdown is open */}
            <svg
              width="12"
              height="8"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: showProfileDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
              }}
            >
              <path
                d="M1 5L5 1L9 5"
                stroke="#111111"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

      </aside>

      {/* ── UserProfileDropdown card ─────────────────────────────────────────
          Rendered outside <aside> so it can float above the page content.
          Only visible when showProfileDropdown is true.
      ── */}
      {showProfileDropdown && (
        <UserProfileDropdown onClose={handleCloseDropdown} />
      )}
    </div>
  );
};

export default Navbar;