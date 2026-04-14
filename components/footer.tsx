import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Footer() {

    const [page, setPage] = useState(1);
    const [startPage, setStartPage] = useState(1);

    const totalPages = 20;
    const visibleCount = 4;

    const pages = Array.from(
        { length: visibleCount },
        (_, i) => startPage + i
    ).filter((p) => p <= totalPages);

    const handleNext = () => {
        if (startPage + visibleCount <= totalPages) {
            setStartPage((prev) => prev + visibleCount);
        }
    };
    const handlePrev = () => {
        if (startPage > 1) {
            setStartPage((prev) => prev - visibleCount);
        }
    };

    return (
        <div className="w-full p-10 absolute bottom-0 flex justify-between items-center p-4 text-sm text-gray-600">
            <div className="text-[14px] text-[#404040] font-[500]">
                Show result:
                <span className="ml-3 py-3 px-3 border rounded-lg ">
                    <select className="text-[16px] font-[700] text-black">
                        <option>10</option>
                        <option>20</option>
                    </select>
                </span>
            </div>

            <div className="flex gap-2 items-center font-[500] text-[16px] text-[#B3B3B3]">

                {/* LEFT */}
                <button
                    onClick={handlePrev}
                    className="px-2 text-[20px] font-[700] text-[#807F7F]"
                >
                    <IoIosArrowBack />
                </button>

                {/* DYNAMIC PAGE NUMBERS */}
                {pages.map((num) => (
                    <button
                        key={num}
                        onClick={() => setPage(num)}
                        className={`px-4 py-2 rounded-xl ${page === num
                                ? "bg-[#F9F5F9] text-[#5F259E] font-[700]"
                                : "hover:bg-[#F9F5F8]"
                            }`}
                    >
                        {num}
                    </button>
                ))}

                {/* DOTS */}
                {startPage + visibleCount <= totalPages && <span>...</span>}

                {/* LAST PAGE */}
                {startPage + visibleCount <= totalPages && (
                    <button onClick={() => setPage(totalPages)}>{totalPages}</button>
                )}

                {/* RIGHT */}
                <button
                    onClick={handleNext}
                    className="px-2 text-[20px] font-[700] text-[#807F7F]"
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    )
}