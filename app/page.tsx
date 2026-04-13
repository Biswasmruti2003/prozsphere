export default function DashboardPage() {
  return (
    <>
      {/* Top Stat Cards */}
      <div className="flex flex-wrap gap-8 mb-10">
        {/* Card 1 */}
        <div className="w-[290px] h-[160px] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M9 16l2 2 4-4"></path></svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">4 Today</h3>
            <p className="text-sm text-gray-500 font-medium mt-1">Upcoming Appointments</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[290px] h-[160px] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">₹58,400</h3>
            <p className="text-sm text-gray-500 font-medium mt-1">Earnings This Month</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[290px] h-[160px] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">6</h3>
            <p className="text-sm text-gray-500 font-medium mt-1">New Patient Requests</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-[290px] h-[160px] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">4.7 (125 Reviews)</h3>
            <p className="text-sm text-gray-500 font-medium mt-1">Rating</p>
          </div>
        </div>
      </div>        {/* Middle Section: Chart & Notifications */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">

        {/* Chart Section */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm xl:col-span-3">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Consultation Trends (Last 6 Months)</h2>
          {/* Added padding left properly, adjusting chart offset */}
          <div className="relative h-[300px] w-full flex">

            {/* Y-Axis Labels properly managed on the left */}
            <div className="flex flex-col justify-between py-2 text-sm text-gray-500 font-medium w-12 shrink-0">
              <span>100</span>
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>

            <div className="flex-1 relative h-full">
              {/* Fake Chart Grid */}
              <div className="absolute inset-x-0 inset-y-2 flex flex-col justify-between">
                {[100, 80, 60, 40, 20, 0].map((val) => (
                  <div key={val} className="w-full border-b border-blue-100/50"></div>
                ))}
              </div>

              {/* The SVG Line - mock representation */}
              <div className="absolute inset-0 pt-2 pb-2 h-full w-full pointer-events-none">
                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 600 200" className="overflow-visible">
                  <path
                    d="M10,180 L40,60 L70,120 L90,90 L130,170 L170,80 L200,60 L230,110 L270,40 L300,100 L320,160 L360,30 L400,90 L420,110 L450,150 L490,40 L520,100 L560,150 L580,70 L590,90"
                    fill="none"
                    stroke="#5B21B6"
                    strokeWidth="3"
                  />
                  {/* Data points */}
                  {[
                    [10, 180], [40, 60], [70, 120], [90, 90], [130, 170], [170, 80], [200, 60],
                    [230, 110], [270, 40], [300, 100], [320, 160], [360, 30], [400, 90], [420, 110],
                    [450, 150], [490, 40], [520, 100], [560, 150], [580, 70], [590, 90]
                  ].map((p, i) => (
                    <circle key={i} cx={p[0]} cy={p[1]} r="4" fill="#A78BFA" stroke="white" strokeWidth="2" />
                  ))}

                  {/* Active Tooltip point (roughly July) */}
                  <circle cx="360" cy="30" r="7" fill="#5B21B6" />
                </svg>

                {/* Tooltip */}
                <div className="absolute top-0 left-[310px] bg-[#222] text-white px-5 py-4 rounded-lg shadow-xl flex flex-col items-center z-10 w-40">
                  <span className="text-base font-semibold">Patient: 30</span>
                  <span className="text-sm text-gray-300 mt-1">Monday, July 18</span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-[#222]"></div>
                </div>
              </div>

              {/* X-Axis Labels */}
              <div className="absolute -bottom-8 w-full flex justify-between text-base font-semibold text-gray-600 px-2">
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
        <div className="flex flex-col gap-5 xl:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-gray-900">Recent Notifications</h2>
            <a href="#" className="text-base font-bold text-gray-900 hover:text-purple-700 flex items-center transition-colors">View More <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M9 18l6-6-6-6" /></svg></a>
          </div>

          {/* Notification 1 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col gap-5 transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
            <div className="flex items-center gap-4 text-sm text-gray-500 font-bold tracking-wide">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M9 16l2 2 4-4"></path></svg>
              </div>
              15 mins ago
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-lg">New Appointment Request</h4>
              <p className="text-base text-gray-500 font-medium mt-2 leading-relaxed">Patient Vishal M. requested a Dermatology consultation.</p>
            </div>
          </div>

          {/* Notification 2 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col gap-5 transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
            <div className="flex items-center gap-4 text-sm text-gray-500 font-bold tracking-wide">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              1 hr ago
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-lg">Document Approved</h4>
              <p className="text-base text-gray-500 font-medium mt-2 leading-relaxed">Your Medical Registration Number has been successfully verified.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mt-6">
        <div className="p-8 pb-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Your Schedule for August 8, 2025</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-base">
            <thead className="bg-[#FAFAFA] text-sm uppercase text-gray-500 font-bold">
              <tr>
                <th className="py-5 px-8">Time</th>
                <th className="py-5 px-8">Patient Name</th>
                <th className="py-5 px-8">Type</th>
                <th className="py-5 px-8">Phone Number</th>
                <th className="py-5 px-8">Mode</th>
                <th className="py-5 px-8">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-6 px-8 font-bold text-gray-900">3:46 am</td>
                <td className="py-6 px-8 font-bold text-gray-900">Jerry Helfer</td>
                <td className="py-6 px-8 font-semibold text-gray-600">Skin Consultation</td>
                <td className="py-6 px-8 font-semibold text-gray-600">(814) 413-9191</td>
                <td className="py-6 px-8 font-semibold text-gray-600">Online</td>
                <td className="py-6 px-8">
                  <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-md text-sm font-bold tracking-wide">Confirmed</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-6 px-8 font-bold text-gray-900">12:18 pm</td>
                <td className="py-6 px-8 font-bold text-gray-900">Mary Freund</td>
                <td className="py-6 px-8 font-semibold text-gray-600">Acne Treatment</td>
                <td className="py-6 px-8 font-semibold text-gray-600">(917) 339-6416</td>
                <td className="py-6 px-8 font-semibold text-gray-600">In-person</td>
                <td className="py-6 px-8">
                  <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-md text-sm font-bold tracking-wide">Confirmed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
} 