import { BiUpload } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

export default function Professional() {
    const docs = [
        { name: "Aadhaar Card", uploaded: true },
        { name: "PAN Card", uploaded: false },
        { name: "Professional License", uploaded: false },
        { name: "Upload Medical Registration Proof", uploaded: false },
        { name: "Upload Cancelled Cheque", uploaded: false },
        { name: "Upload Professional Photo", uploaded: false },
    ];

    return (
        <div className="p-10 max-w-4xl min-h-screen">
            <h2 className="text-[20px] font-[600] mb-6">Professional Settings</h2>

            {/* Form */}
            <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                    <label className="text-[16px] font-[600]">Medical Reg. No.</label>
                    <input className="mt-2 w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#808080] focus:outline-none focus:ring-2 focus:ring-[#5F259E]"
                        placeholder="MCI/987654" />
                </div>

                <div>
                    <label className="text-[16px] font-[600]">Experience</label>
                    <input className="mt-2 w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#808080] focus:outline-none focus:ring-2 focus:ring-[#5F259E]"
                        placeholder="12 years" />
                </div>

                <div>
                    <label className="text-[16px] font-[600]">Specializations</label>
                    <select className="mt-2 w-full appearance-none  border border-gray-200 rounded-lg px-4 py-3 relative  text-[14px] text-[#808080] focus:outline-none focus:ring-2 focus:ring-[#5F259E]">
                        <option>Dermatology, Telemedicine, Cosmetology</option>
                    </select>
                </div>

                <div>
                    <label className="text-[16px] font-[600]">Availability</label>
                    <select className="mt-2 w-full appearance-none  border border-gray-200 rounded-lg px-4 py-3 relative  text-[14px] text-[#808080] focus:outline-none focus:ring-2 focus:ring-[#5F259E]">
                        <option>Mon–Fri: 9 AM – 5 PM</option>
                    </select>
                </div>

                <div className="col-span-2">
                    <label className="text-[16px] font-[600]">Qualifications</label>
                    <select className="mt-2 w-full appearance-none  border border-gray-200 rounded-lg px-4 py-3 relative  text-[14px] text-[#808080] focus:outline-none focus:ring-2 focus:ring-[#5F259E]">
                        <option>Dermatology, Telemedicine, Cosmetology</option>
                    </select>
                </div>
            </div>

            {/* Upload Section */}
            <h3 className="text-[20px] font-[600] mt-14 mb-4">Upload Documents</h3>
            <div className="space-y-4">
                {docs.map((doc, i) => (
                    <div className="flex items-center" key={i}>
                        <div className="flex-1 flex items-center justify-between border border-gray-200 rounded-full p-4 px-5 bg-white">
                            <span className="text-[16px] font-[600] ">{doc.name}</span>
                            {doc.uploaded ? (
                                <div className="h-5 w-5 bg-[#29CC39] text-white flex justify-center items-center rounded-full"><FaCheck size={12} /></div>
                            ) : (
                                <BiUpload size={22} className="text-black  cursor-pointer" />
                            )}
                        </div>
                        <div className="ml-4 w-[50px] flex justify-center">
                            <button
                                className={`bg-[#FFCACA] p-3 rounded-full flex items-center justify-center transition ${doc.uploaded ? "opacity-100" : "opacity-0 pointer-events-none"
                                    }`}
                            >
                                <RiDeleteBinFill className="text-[#E20909]" size={25} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}