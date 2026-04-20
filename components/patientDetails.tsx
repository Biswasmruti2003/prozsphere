
import { LiaFilterSolid } from "react-icons/lia";
import { PiCalendarCheck } from "react-icons/pi";
import { RiGroup2Line, RiSearch2Line, RiStarHalfSLine, RiUserAddLine } from "react-icons/ri";



const cards = [
    { value: 248, label: "Total Active Patients", icon: RiGroup2Line, color: "#C084FC" },
    { value: 36, label: "New Patients This Month", icon: RiUserAddLine, color: "#2EAC2B" },
    { value: 52, label: "Follow-ups Scheduled", icon: PiCalendarCheck, color: "#605BFF" },
    { value: 4.7, label: "Avg. Consultation Rating", icon: RiStarHalfSLine, color: "#FF5757" },
]


export default function PatientDetails() {
    return (
            <div className="p-10">
                {/* Top Cards */}
                <div className="grid grid-cols-4 gap-6 ">
                    {cards.map((card, i) => {
                        let Icon = card.icon;
                        return (
                            <div key={i} className="min-h-[160px] bg-white p-5 rounded-xl border-[2px] border-[#E9E9E9] flex flex-col justify-between"  >
                                <div className="flex">
                                    <div className="border-2 border-[#E9E9E9] inline rounded-full p-1" >
                                        <Icon className="text-[23px] font-'[900]" style={{ color: card.color }} />
                                    </div>
                                </div>
                                <h2 className="text-[26px] text-black font-[800]">{card.value}</h2>
                                <p className="text-[#808080] text-[15px] font-[600] ">{card.label}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
    )
}
