'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface UserProfileDropdownProps {
  onClose: () => void;
}

const LogoutModal: React.FC<{ onCancel: () => void; onConfirm: () => void }> = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
      <div className="relative bg-white rounded-3xl shadow-2xl w-[380px] px-8 pt-10 pb-8 flex flex-col items-center">
        <button
          onClick={onCancel}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-[#111111] hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L17 17M17 1L1 17" stroke="#111111" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="w-[72px] h-[72px] rounded-full border-2 border-[#F5B8B8] flex items-center justify-center mb-6">
          <div className="w-[52px] h-[52px] rounded-full bg-[#E53935] flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" fill="white"/>
              <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <h2 className="text-[22px] font-bold text-[#111111] mb-3">Confirm Logout</h2>

        <p className="text-[15px] text-[#4B5563] text-center leading-relaxed mb-8">
          Are you sure you want to log out? Any unsaved<br />changes will be lost.
        </p>

        <div className="flex gap-4 w-full">
          <button
            onClick={onCancel}
            className="flex-1 py-[14px] rounded-xl bg-[#F3F4F6] text-[15px] font-semibold text-[#111111] hover:bg-[#E5E7EB] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-[14px] rounded-xl bg-[#E53935] text-[15px] font-semibold text-white hover:bg-[#C62828] transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

const UserProfileDropdown: React.FC<UserProfileDropdownProps> = ({ onClose }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-50" onClick={onClose}>
        <div
          className="absolute bottom-[88px] left-[16px] w-[270px] bg-white rounded-2xl shadow-2xl border border-[#EFEFEF] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 px-5 py-5">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-gray-200">
              <img src="/profile1.png" alt="Dr. Arjun Mehta" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-bold text-[#111111] leading-tight truncate">Dr. Arjun Mehta</p>
              <p className="text-[13px] text-[#6B7280] truncate mt-0.5">k.p.allen@aol.com</p>
            </div>
          </div>

          <div className="h-[1px] bg-[#F0F0F0]" />

          <Link
            href="/account-settings"
            onClick={onClose}
            className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" stroke="#111111" strokeWidth="1.8" />
              <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span className="text-[15px] font-semibold text-[#111111]">Edit Profile</span>
          </Link>

          <div className="h-[1px] bg-[#F0F0F0]" />

          <Link
            href="/account-settings"
            onClick={onClose}
            className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" stroke="#111111" strokeWidth="1.8" />
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
                stroke="#111111"
                strokeWidth="1.8"
              />
            </svg>
            <span className="text-[15px] font-semibold text-[#111111]">Account Settings</span>
          </Link>

          <div className="h-[1px] bg-[#F0F0F0]" />

          <button
            onClick={() => setShowLogoutModal(true)}
            className="w-full flex items-center gap-3 px-5 py-4 hover:bg-red-50 transition-colors cursor-pointer"
          >
            <img
              src="/logout-circle-line.png"
              alt="Logout"
              width={20}
              height={20}
              className="w-[20px] h-[20px] object-contain"
            />
            <span className="text-[15px] font-semibold text-[#E53935]">Logout</span>
          </button>
        </div>
      </div>

      {showLogoutModal && (
        <LogoutModal
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={handleLogoutConfirm}
        />
      )}
    </>
  );
};

export default UserProfileDropdown;