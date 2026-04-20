'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', icon: '/navlogo0.png', href: '/' },
  { name: 'Service Management', icon: '/navlogo1.png', href: '/service-management' },
  { name: 'Client Engagement', icon: '/navlogo2.png', href: '/client-engagement' },
  { name: 'Messages', icon: '/navlogo3.png', href: '/messages' },
  { name: 'Payments & Earnings', icon: '/navlogo4.png', href: '/payments-and-earnings' },
  { name: 'Reviews & Ratings', icon: '/navlogo5.png', href: '/reviews-and-ratings' },
  { name: 'Calendar', icon: '/navlogo6.png', href: '/calendar' },
  { name: 'Account Settings', icon: '/navlogo7.png', href: '/account-settings'},
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[320px] bg-[#FCFDFF] h-screen border-r border-[#E9E9E9] flex flex-col  overflow-y-auto">
      {/* Logo Section */}
      <div className="pt-8 pb-8 px-6 flex items-center gap-3">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#111111"/>
          <path d="M14.5 13C16.433 13 18 11.433 18 9.5C18 7.567 16.433 6 14.5 6C12.567 6 11 7.567 11 9.5C11 11.433 12.567 13 14.5 13Z" fill="#111111"/>
          <path d="M9.5 18C11.433 18 13 16.433 13 14.5C13 12.567 11.433 11 9.5 11C7.567 11 6 12.567 6 14.5C6 16.433 7.567 18 9.5 18Z" fill="white"/>
        </svg>
        <span className="font-extrabold text-[#111] text-2xl tracking-wide">PROZSPHERE</span>
      </div>

      {/* Menu Label */}
      <div className="px-7 lg:px-9 pb-3">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Menu</span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-4 lg:px-6 space-y-1">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={index} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors
                ${isActive 
                  ? 'bg-[#5B21B6] text-white' 
                  : 'text-[#4A5568] hover:bg-gray-50'
                }
              `}
            >
              <img 
                src={item.icon} 
                alt={item.name} 
                className={`w-5 h-5 object-contain ${isActive ? 'brightness-0 invert' : ''}`} 
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Profile Section */}
      <div className="p-6 lg:p-8 border-t border-[#FAFAFA] mt-auto">
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0">
            {/* Using a placeholder SVG or image for Dr. Arjun Mehta */}
            <img src="https://i.pravatar.cc/150?img=11" alt="Dr. Arjun Mehta" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-bold text-gray-900 truncate">Dr. Arjun Mehta</p>
            <p className="text-sm text-gray-500 truncate">k.p.allen@aol.com</p>
          </div>
          <svg width="12" height="8" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5L5 1L9 5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;