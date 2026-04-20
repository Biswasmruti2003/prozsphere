import { LiaFilterSolid } from "react-icons/lia";
import { RiSearch2Line } from "react-icons/ri";

export default function Heading({heading} :any) {
    return (
        <div className="flex p-10 pb-0 justify-between items-center ">
            <h1 className="text-[#000000] font-[700] text-[30px]">{heading}</h1>
            <div className="flex gap-3 items-center">
                <div className="flex items-center text-[14px] gap-2 p-2  border  rounded-md text-[#A3ACBA] font-[500] ">
                    <RiSearch2Line className="text-xl" />
                    <input
                        type="text"
                        placeholder="Search by ID, Name or phone..."
                        className="outline-none w-54"
                    />
                </div>
                <button className="border-2 border-[#5F259E] text-[#5F259E] px-4 py-2 text-[14px] rounded-md flex items-center gap-2"><LiaFilterSolid className="h-5 w-5" />Filters</button>
            </div>
        </div>
    )
}