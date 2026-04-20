export default function MessagesPage() {
  const contacts = [
    { name: 'Frances Swann', time: '2:45 PM', msg: '"Thanks doctor, see you tomorrow"', unread: 1, avatar: '/msg1.png' },
    { name: 'David Elson', time: '2:45 PM', msg: '"Thanks doctor, see you tomorrow"', unread: 0, avatar: '/msg2.png' },
    { name: 'Bradley Lawlor', time: '2:45 PM', msg: '"Thanks doctor, see you tomorrow"', unread: 0, avatar: '/msg3.png' },
    { name: 'Rodger Struck', time: '2:45 PM', msg: '"Thanks doctor, see you tomorrow"', unread: 0, avatar: '/msg4.png' },
    { name: 'Corina McCoy', time: '2:45 PM', msg: '"Thanks doctor, see you tomorrow"', unread: 0, avatar: '/msg5.png' },
    { name: 'John Dukes', time: '2:45 PM', msg: '"Thanks doctor, see you tomorrow"', unread: 0, avatar: '/msg6.png' },
  ];

  return (
    <div className="flex w-full h-full bg-[#FAFAF9]">
      <div className="w-[380px] xl:w-[450px] bg-white border-r border-[#E9E9E9] flex flex-col h-full shrink-0">
        <div className="px-8 pt-6 pb-4">
          <h1 className="text-[32px] font-bold text-[#111111] mb-4 tracking-tight">Messages</h1>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0AEC0]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <input 
              type="text" 
              placeholder="Search by client name / booking ID" 
              className="w-full pl-11 pr-10 py-2.5 bg-white border border-[#E9E9E8] rounded-sm text-[13px] xl:text-sm font-medium text-gray-900 placeholder:text-[#A0AEC0] outline-none focus:border-[#5B21B6] transition-colors truncate"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5B21B6] cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-8 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {contacts.map((c, i) => (
            <div key={i} className="flex items-center gap-4 py-6 border-b border-[#F0F0F0] cursor-pointer hover:bg-gray-50 -mx-8 px-8 transition-colors">
              <img src={c.avatar} alt={c.name} className="w-[52px] h-[52px] rounded-full object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1.5">
                  <h3 className="text-[18px] font-bold text-[#111111] truncate">{c.name}</h3>
                  <span className="text-[13px] font-medium text-[#A0AEC0] shrink-0">{c.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[14px] font-medium text-gray-400 truncate">{c.msg}</p>
                  {c.unread > 0 && (
                    <span className="w-[22px] h-[22px] rounded-full bg-[#5B21B6] text-white text-[11px] font-extramedium flex items-center justify-center shrink-0 ml-2 shadow-sm">{c.unread}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-[#FAFAF9] flex flex-col h-full relative">
        <div className="px-10 py-8 flex items-center justify-between border-b border-[#E9E9E9] bg-[#FAFAF9] shrink-0">
          <div className="flex items-center gap-4">
            <img src="/msg1.png" alt="Frances Swann" className="w-[52px] h-[52px] rounded-full object-cover shrink-0" />
            <div>
              <h2 className="text-[18px] font-bold text-[#111111]">Frances Swann</h2>
              <p className="text-[14px] font-medium text-[#A0AEC0] mt-0.5">Online</p>
            </div>
          </div>
          <button className="text-[#111111] hover:text-gray-600 transition-colors p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="3" r="1.5"></circle><circle cx="12" cy="11" r="1.5"></circle><circle cx="12" cy="19" r="1.5"></circle></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-10 pt-60 pb-[130px] flex flex-col gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex flex-col items-start max-w-[65%]">
            <div className="bg-[#565555] rounded-[46px] rounded-bl-xs px-7 py-5 text-white drop-shadow-sm">
              <p className="text-[16px] font-medium leading-relaxed tracking-wide">Hello Doctor, I booked an appointment for tomorrow at 10 AM. Is it confirmed?</p>
            </div>
            <span className="text-[13px] font-medium text-[#A0AEC0] mt-2 ml-2">2:40 PM</span>
          </div>

          <div className="flex flex-col items-end self-end max-w-[65%]">
            <div className="bg-[#5B21B6] rounded-[46px] rounded-br-xs px-7 py-5 text-white drop-shadow-sm">
              <p className="text-[16px] font-medium leading-relaxed tracking-wide">Yes, I've received your booking. Please bring your latest blood test reports.</p>
            </div>
            <span className="text-[13px] font-medium text-[#A0AEC0] mt-2 mr-2">2:45 PM</span>
          </div>

          <div className="flex flex-col items-start max-w-[65%]">
            <div className="bg-[#565555] rounded-[46px] rounded-bl-xs px-7 py-5 text-white drop-shadow-sm">
              <p className="text-[16px] font-medium leading-relaxed tracking-wide">Thanks doctor, see you tomorrow</p>
            </div>
            <span className="text-[13px] font-medium text-[#A0AEC0] mt-2 ml-2">2:45 PM</span>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 xl:bottom-10 xl:left-10 xl:right-10 flex items-center justify-center gap-3 lg:gap-4 lg:max-w-none max-w-full">
          <div className="bg-white rounded-full drop-shadow-md flex items-center px-6 h-16 flex-1 gap-4">
            <img src="/msgattachment-1.png" alt="attachment" className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
            <img src="/msgattachment-2.png" alt="attachment" className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
            <input 
              type="text" 
              placeholder="Type a Message" 
              className="w-full bg-transparent border-none outline-none text-[15px] font-medium  placeholder:text-grey-900" 
            />
          </div>
          <button className="w-14 h-14 bg-[#5B21B6] rounded-full flex items-center justify-center text-white shrink-0 hover:bg-[#4c1d95] transition-colors shadow-md">
            <img src="/msgsendlogo.png" alt="send" />
          </button>
        </div>
      </div>
    </div>
  );
}