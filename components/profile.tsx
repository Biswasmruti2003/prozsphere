import { IoIosArrowDown } from "react-icons/io";
import { RiEditBoxFill } from "react-icons/ri";

export default function Profile() {
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