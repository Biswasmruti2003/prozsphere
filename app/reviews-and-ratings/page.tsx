"use client"

import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import PatientDetails from "@/components/PatientDetails";
import { BiSolidStar } from "react-icons/bi";


const heading = " Reviews & Ratings"
const reviews = [
  {
    name: "Anjali P.",
    type: "DERMATOLOGY CONSULTATION",
    date: "Aug 20, 2025 2:26 pm",
    rating: 5,
    text: "Doctor explained clearly and gave effective medicines.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Corina McCoy",
    type: "DERMATOLOGY CONSULTATION",
    date: "Aug 25, 2025 4:22 pm",
    rating: 5,
    text: "Doctor explained clearly and gave effective medicines.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Kathy Pacheco",
    type: "TELEMEDICINE (GENERAL)",
    date: "Aug 13, 2025 8:23 pm",
    rating: 4,
    text: "Quick response but waiting time was a little long.",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Chris Glasser",
    type: "DERMATOLOGY CONSULTATION",
    date: "Aug 16, 2025 5:20 am",
    rating: 5,
    text: "Doctor explained clearly and gave effective medicines.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "James Hall",
    type: "DERMATOLOGY CONSULTATION",
    date: "Aug 18, 2025 2:44 am",
    rating: 5,
    text: "Doctor explained clearly and gave effective medicines.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ramesh K.",
    type: "TELEMEDICINE (GENERAL)",
    date: "Aug 23, 2025 6:53 am",
    rating: 4,
    text: "Quick response but waiting time was a little long.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function ReviewsRatingsPage() {
  return (
    <div className="relative">
      <Heading heading={heading}/>
      <PatientDetails  />
      <div className="px-10 ">
        <div className="grid grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className=" bg-[#FFFFFF] rounded-xl border border-[#E9E9E9] px-6 py-8 flex flex-col gap-4"  >
              {/* TOP */}
              <div className="flex items-center gap-3">
                <img
                  src={review.img}
                  alt=""
                  className="w-15 h-15 rounded-[18px] object-cover"
                />
                <div>
                  <h3 className="font-[600] text-[20px]">
                    {review.name}
                  </h3>
                  <p className="text-[14px] text-[#F46520] font-[700]">
                    {review.type}
                  </p>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="border-t border-dashed border-[#D3D3D3]"></div>

              {/* RATING + DATE */}
              <div className="flex items-center">
                <div className="flex gap-[0.5px]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <BiSolidStar  key={idx}
                      className={`w-5 h-5 ${idx < review.rating
                        ? "text-[#FFD43E] "
                        : "text-transparent"
                        }`}
                    />
                  ))}
                </div>
                <span className="ms-6 text-black text-[15px] font-[600]">
                  {review.date}
                </span>
              </div>

              {/* TEXT */}
              <p className="w-[90%] text-black text-[15px] font-[600]">
                “{review.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
