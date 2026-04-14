
export default function DashboardPage() {
  return (
    <div className="p-10">
      {/* Top Stat Cards - 4 Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 w-full">
        {/* Card 1 - Upcoming Appointments */}
        <div className="w-full h-[150px] rounded-2xl p-6 border border-gray-300 flex flex-col justify-between">
          <img src="/card1.png" alt="Upcoming Appointments" className="w-8 h-9 object-contain" />
          <div className="flex flex-col gap-2 mt-3">
            <h3 className="text-2xl font-bold text-gray-900">4 Today</h3>
            <p className="text-sm text-gray-500 font-medium">Upcoming Appointments</p>
          </div>
        </div>

        {/* Card 2 - Earnings This Month */}
        <div className="w-full h-[150px] rounded-2xl p-6 border border-gray-300 flex flex-col justify-between">
          <img src="/card2.png" alt="Earnings" className="w-8 h-9 object-contain" />
          <div className="flex flex-col gap-2 mt-3">
            <h3 className="text-2xl font-bold text-gray-900">₹58,400</h3>
            <p className="text-sm text-gray-500 font-medium">Earnings This Month</p>
          </div>
        </div>

        {/* Card 3 - New Patient Requests */}
        <div className="w-full h-[150px] rounded-2xl p-6 border border-gray-300 flex flex-col justify-between">
          <img src="/card3.png" alt="Patient Requests" className="w-8 h-9 object-contain" />
          <div className="flex flex-col gap-2 mt-3">
            <h3 className="text-2xl font-bold text-gray-900">6</h3>
            <p className="text-sm text-gray-500 font-medium">New Patient Requests</p>
          </div>
        </div>

        {/* Card 4 - Rating */}
        <div className="w-full h-[150px] rounded-2xl p-6 border border-gray-300 flex flex-col justify-between">
          <img src="/card4.png" alt="Rating" className="w-8 h-9 object-contain" />
          <div className="flex flex-col gap-2 mt-3">
            <h3 className="text-2xl font-bold text-gray-900">4.7 (125 Reviews)</h3>
            <p className="text-sm text-gray-500 font-medium">Rating</p>
          </div>
        </div>
      </div>

      {/* Middle Section: Chart & Notifications */}
      <div className="grid grid-cols-1 xl:grid-cols-6 gap-7 gap-y-10 mb-10 w-full">

        {/* Chart Section - Consultation Trends */}
        <div className="bg-transparent w-full  rounded-[13px] px-8 pt-8 pb-19 border border-gray-300 xl:col-span-4 flex flex-col">
          <h2 className="text-[17px] font-bold text-[#374151] mb-6">Consultation Trends (Last 6 Months)</h2>

          {/* Chart Container */}
          <div className="relative flex-1 w-full flex">
            {/* Grid & Y-Labels */}
            <div className="absolute inset-0 z-0 flex flex-col justify-between">
              {[100, 80, 60, 40, 20, 0,].map((val) => (
                <div key={val} className="flex items-center w-full">
                  <span className="w-[48px] shrink-0 text-left text-base font-semibold text-[#4B5563]">{val}</span>
                  <div className="flex-1 h-[1.5px] bg-[#E2E8FF]"></div>
                </div>
              ))}
            </div>

            {/* Chart Area */}
            <div className="flex-1 relative h-full">
              {/* SVG Graph */}
              <div className="absolute top-0 bottom-0 left-[48px] right-0 z-10">
                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 600 200" className="overflow-visible">
                  {/* Line Path */}
                  <path
                    d="M10,180 L40,60 L70,120 L90,90 L130,170 L170,80 L200,60 L230,110 L270,40 L300,100 L320,160 L360,30 L400,90 L420,110 L450,150 L490,40 L520,100 L560,150 L580,70 L590,90"
                    fill="none"
                    stroke="#5B21B6"
                    strokeWidth="3"
                  />

                  {/* Data Points */}
                  {[
                    [10, 180], [40, 60], [70, 120], [90, 90], [130, 170], [170, 80], [200, 60],
                    [230, 110], [270, 40], [300, 100], [320, 160], [360, 30], [400, 90], [420, 110],
                    [450, 150], [490, 40], [520, 100], [560, 150], [580, 70], [590, 90]
                  ].map((p, i) => (
                    <circle key={i} cx={p[0]} cy={p[1]} r="4" fill="#A78BFA" stroke="white" strokeWidth="2" />
                  ))}

                  {/* Active Tooltip Point (July Peak) */}
                  <circle cx="360" cy="30" r="7" fill="#5B21B6" />
                </svg>

                {/* Tooltip - Hover Point */}
                <div className="absolute top-0 left-[310px] bg-[#222] text-white px-5 py-4 rounded-lg shadow-xl flex flex-col items-center z-10 w-40">
                  <span className="text-base font-semibold">Patient: 30</span>
                  <span className="text-sm text-gray-300 mt-1">Monday, July 18</span>
                  {/* Tooltip Arrow */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-[#222]"></div>
                </div>
              </div>

              {/* X-Axis Labels */}
              <div className="absolute -bottom-8 left-[48px] right-0 flex justify-between text-[13px] font-semibold text-gray-500">
                <span>March</span>
                <span>April</span>
                <span>May</span>
                <span>June</span>
                <span>July</span>
                <span>August (till 8th)</span>
              </div>
            </div>

          </div>
        </div>

        {/* Notifications Section */}
        <div className="flex flex-col gap-5 xl:col-span-2 ">
          {/* Header with View More */}
          <div className="flex justify-between items-center mb-2 ">
            <h2 className="text-xl font-bold text-gray-900">Recent Notifications</h2>
            <a href="#" className="text-base font-bold text-gray-900 hover:text-purple-700 flex items-center transition-colors">
              View More
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M9 18l6-6-6-6" /></svg>
            </a>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            {/* Notification 1 - Appointment Request */}
            <div className="bg-white w-[430px] rounded-2xl px-6 py-7 border border-gray-200 shadow-sm flex flex-col justify-between flex-1 opacity-100 transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
              {/* Time & Icon */}
              <div className="flex items-center gap-3 text-sm text-gray-500 font-bold tracking-wide mb-3">
                <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M9 16l2 2 4-4"></path></svg>
                </div>
                15 mins ago
              </div>
              {/* Notification Content */}
              <div>
                <h4 className="font-extrabold text-gray-900 text-base leading-tight">New Appointment Request</h4>
                <p className="text-l text-gray-500 font-medium mt-1 leading-snug">Patient Vishal M. requested a Dermatology consultation.</p>
              </div>
            </div>

            {/* Notification 2 - Document Approved */}
            <div className="bg-white w-[430px] rounded-2xl px-6 py-7 border border-gray-200 shadow-sm flex flex-col justify-between flex-1 opacity-100 transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
              {/* Time & Icon */}
              <div className="flex items-center gap-3 text-sm text-gray-500 font-bold tracking-wide">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                1 hr ago
              </div>
              {/* Notification Content */}
              <div>
                <h4 className="font-extrabold text-gray-900 text-base leading-tight">Document Approved</h4>
                <p className="text-sm text-gray-500 font-medium mt-1 leading-snug">Your Medical Registration Number has been successfully verified.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Table Section */}
      <div className="mt-8 mb-12 w-full">
        {/* Table Header */}
        <div className="pb-4 border-b border-gray-100 mb-4">
          <h2 className="text-xl font-bold text-gray-900">Your Schedule for August 8, 2025</h2>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-base">
            {/* Table Head */}
            <thead className="text-[#8A9BAD] text-[15px] font-bold">
              <tr>
                <th className="pb-5 pl-2 pr-6 whitespace-nowrap">Time</th>
                <th className="pb-5 px-6 whitespace-nowrap">Patient Name</th>
                <th className="pb-5 px-6 whitespace-nowrap">Type</th>
                <th className="pb-5 px-6 whitespace-nowrap">Phone Number</th>
                <th className="pb-5 px-6 whitespace-nowrap">Mode</th>
                <th className="pb-5 pr-2 pl-6 whitespace-nowrap">Status</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {/* Row 1 - Jerry Helfer */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-6 pl-2 pr-6 font-bold text-gray-900 whitespace-nowrap">3:46 am</td>
                <td className="py-6 px-6 font-bold text-gray-900 whitespace-nowrap">Jerry Helfer</td>
                <td className="py-6 px-6 font-semibold text-gray-500 whitespace-nowrap">Skin Consultation</td>
                <td className="py-6 px-6 font-semibold text-gray-500 whitespace-nowrap">(814) 413-9191</td>
                <td className="py-6 px-6 font-semibold text-gray-500 whitespace-nowrap">Online</td>
                <td className="py-6 pr-2 pl-6 whitespace-nowrap">
                  <span className="px-3.5 py-1.5 bg-[#E8F8EE] border border-[#BCE4C8] text-[#1E8E3E] rounded-md text-xs font-bold tracking-wide">Confirmed</span>
                </td>
              </tr>

              {/* Row 2 - Mary Freund */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-6 pl-2 pr-6 font-bold text-gray-900 whitespace-nowrap">12:18 pm</td>
                <td className="py-6 px-6 font-bold text-gray-900 whitespace-nowrap">Mary Freund</td>
                <td className="py-6 px-6 font-semibold text-gray-500 whitespace-nowrap">Acne Treatment</td>
                <td className="py-6 px-6 font-semibold text-gray-500 whitespace-nowrap">(917) 339-6416</td>
                <td className="py-6 px-6 font-semibold text-gray-500 whitespace-nowrap">In-person</td>
                <td className="py-6 pr-2 pl-6 whitespace-nowrap">
                  <span className="px-3.5 py-1.5 bg-[#E8F8EE] border border-[#BCE4C8] text-[#1E8E3E] rounded-md text-xs font-bold tracking-wide">Confirmed</span>
                </td>
              </tr>

              {/* Row 3 - Lorri Warf */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-6 pl-2 pr-6 font-bold text-gray-900 whitespace-nowrap">7:44 am</td>
                <td className="py-6 px-6 font-bold text-gray-900 whitespace-nowrap">Lorri Warf</td>
                <td className="py-6 px-6 font-semibold text-gray-500 whitespace-nowrap">Hair Loss Issue</td>
                <td className="py-6 px-6 font-semibold text-gray-500 whitespace-nowrap">(215) 424-7763</td>
                <td className="py-6 px-6 font-semibold text-gray-500 whitespace-nowrap">Online</td>
                <td className="py-6 pr-2 pl-6 whitespace-nowrap">
                  <span className="px-3.5 py-1.5 bg-[#FFF4E5] border border-[#F6D2A1] text-[#D06F14] rounded-[5px] text-xs font-bold tracking-wide">Awaiting</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}