import { GoPencil } from "react-icons/go";

export default function Security() {
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
          <div className="flex items-start space-x-3">
            <div className="text-right">
              <span className="block font-[600]">s.t.sharkey@outlook.com</span>
              <span className="text-[#2EAC2B] text-sm">Verified</span>
            </div>
            <button className="p-1 border-2 border-blue-600 rounded-md text-blue-600 hover:bg-blue-50">
              <GoPencil size={20} />
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
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[16px] font-[600] ">2-Step Verification</h2>
            <p className="text-[16px] font-[500] text-[#718096]">Set a unique password to protect your account</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-14 h-8 bg-[#959595] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[4px] after:bg-white  after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4">
          <button className="px-8 py-2 bg-[#3A5AFE] text-white  rounded-md hover:bg-blue-700 transition-colors">
            Logout
          </button>
          <button className="px-8 py-2 bg-[#E20909] text-white font-semibold rounded-md hover:bg-red-700 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}