"use client";
import { useState } from "react";
import { RiDiscountPercentLine, RiPriceTag3Line, RiSearch2Line } from "react-icons/ri";
import { LiaFilterSolid } from "react-icons/lia";

const servicesData = [
  {
    title: "Telemedicine Consultation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    price: "₹800",
    discount: "20% Off",
    button: "Book Now",
  },
  {
    title: "Video consultation with certified doctors",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    price: "₹1500",
    discount: "20% Off",
    button: "Book Now",
  },
  {
    title:
      "Cashless Claim Advisory, Medical Opinion for Claim Validation, Health Insurance Tie-ups (Case-based)",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    price: "₹1000",
    discount: "20% Off",
    button: "Ask Me",
  },
];

export default function ServiceManagement() {
  const [activeIndex, setActiveIndex] = useState(1);

  return ( 
    <div className="min-h-screen p-10 font-inter">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[#000000] font-[700] text-[30px]">Service Management</h1>
        <div className="flex gap-3 items-center">
          <div className="flex items-center text-[14px] gap-2  p-2  border  rounded-md text-[#A3ACBA] font-[500] ">
            <RiSearch2Line className="text-xl" />
            <input
              type="text"
              placeholder="Search by ID, Name or phone..."
              className="outline-none w-54"
            />
          </div>
          <button className="border-2 border-[#5F259E] px-4 py-2 text-[14px] rounded-md flex items-center gap-2"><LiaFilterSolid className="h-5 w-5" />Filters</button>
          <button className="bg-[#5F259E] border border-[#5F259E] text-white px-4 py-2 rounded-md"> + Add Service Modal  </button>
        </div>
      </div>

      {/* Service Cards */}
      <div className="space-y-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`bg-white p-6 rounded-lg border border-[#E9E9E9] cursor-pointer transition relative`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-[600] text-[20px]">{service.title}</h2>
                <p className="text-[#808A98] font-[400] text-[16px] mt-1">
                  {service.description}
                </p>

                <div className="flex items-center text-black font-[500] gap-6 mt-6 text-[16px]">
                  <div className="flex items-center gap-3">
                    <RiPriceTag3Line className="h-6 w-6" />
                    {service.price}
                  </div>

                  <div className="flex items-center gap-1">
                    <RiDiscountPercentLine className="h-6 w-6" />
                    {service.discount}
                  </div>
                </div>
              </div>

              <button className="absolute right-15 bg-[#5F259E] text-[14px] text-white px-4 py-2 rounded-md">
                {service.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}