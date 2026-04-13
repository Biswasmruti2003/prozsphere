"use client";

import { RiBuilding2Line, RiScales3Line, RiThermometerLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { BiCalculator, BiChevronDown, BiUpload } from "react-icons/bi";
const images = [
    "/bgimages/l1.png",
    "/bgimages/l2.png",
    "/bgimages/l3.png",
    "/bgimages/l4.png",
];

export const FirstForm = ({ next }) => {
    const categories = [
        { id: 'healthcare', name: 'Healthcare', icon: RiThermometerLine },
        { id: 'tax', name: 'Tax Experts', icon: BiCalculator },
        { id: 'legal', name: 'Legal Expert', icon: RiScales3Line },
        { id: 'infrastructure', name: 'Infrastructure', icon: RiBuilding2Line },
    ];
    const [selected, setSelected] = useState('healthcare');
    return (
        <>
            <div className="space-y-6">
                {categories.map((cat) => {
                    const isSelected = selected === cat.id;
                    const Icon = cat.icon;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setSelected(cat.id)}
                            className={`w-full flex items-center justify-between p-3 rounded-[15px] border-1 ${isSelected
                                ? 'border-3 border-[#5F259E] bg-[#DFEBFF]'
                                : ' border-[#808080] bg-white'
                                }`}
                        >
                            <div className="w-full flex items-center gap-4">
                                <div className={`p-2 rounded-full ${isSelected ? 'bg-[#5F259E] text-white' : 'bg-[#A3A3A3] text-white'
                                    }`}>
                                    <Icon size="28px" />
                                </div>
                                <span className={`text-[16px] font-[700] ${isSelected ? 'text-[#5F259E]' : 'text-[#A3A3A3]'
                                    }`}>
                                    {cat.name}
                                </span>
                            </div>

                            {/* Radio Indicator */}
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isSelected ? 'bg-[#5F259E]' : 'bg-[#FFFFFF] border-[1.5px] border-[#D5DBE1] shadow-xl'
                                }`}>
                                {isSelected && <div className="w-[9px] h-[9px] bg-[#FFFFFF] rounded-full" />}
                            </div>
                        </button>
                    );
                })}
                <button className="w-full bg-[#5F259E] hover:bg-[#5b21b6] text-white font-bold py-4 rounded-xl transition-colors mt-8"
                    onClick={next}>
                    Continue
                </button>
            </div>
        </>
    );
}

export const SecondForm = ({ next }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                    type="text"
                    placeholder="Business Name"
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 outline-none text-gray-700 placeholder-gray-400"
                />
                <div className="relative">
                    <select className="w-full px-4 py-4 border border-gray-300 rounded-md appearance-none focus:ring-2 focus:ring-[#5F259E] outline-none text-gray-400 bg-white">
                        <option>Business Type</option>
                        <option>Private Limited</option>
                        <option>Partnership</option>
                        <option>Sole Proprietorship</option>
                    </select>
                    <BiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
                </div>
            </div>
            {/* Contact Person */}
            <input
                type="text"
                placeholder="Contact Person Name"
                className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5F259E] outline-none text-gray-700"
            />
            {/* Email */}
            <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5F259E] outline-none text-gray-700"
            />
            {/* Phone Number with Flag */}
            <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#5F259E]">
                <div className="flex items-center gap-2 px-4 border-r border-gray-300 bg-white cursor-pointer hover:bg-gray-50">
                    <img
                        src="https://flagcdn.com/w20/in.png"
                        alt="India"
                        className="w-5 h-4 object-cover"
                    />
                    <span className="text-gray-700 font-medium">+91</span>
                    <BiChevronDown size={16} className="text-gray-500" />
                </div>
                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-4 outline-none text-gray-700"
                />
            </div>
            {/* Business Address */}
            <input
                type="text"
                placeholder="Business Address"
                className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5F259E] outline-none text-gray-700"
            />
            {/* Row: GSTIN & PAN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                    type="text"
                    placeholder="GSTIN"
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5F259E] outline-none text-gray-700"
                />
                <input
                    type="text"
                    placeholder="PAN Card Number"
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5F259E] outline-none text-gray-700"
                />
            </div>
            {/* Upload Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button className="flex items-center justify-between py-4 px-3 text-[15px]  border border-[#5F259E] text-[5F259E] font-semibold rounded-full hover:bg-purple-50 transition-colors">
                    Upload PAN Card
                    <BiUpload size={18} />
                </button>
                <button className="flex items-center justify-between py-4 px-3 text-[15px]   border border-[#5F259E] text-[5F259E] font-semibold rounded-full hover:bg-purple-50 transition-colors">
                    Upload Business Logo
                    <BiUpload size={18} />
                </button>
            </div>
            <input
                type="text"
                placeholder="Website / LinkedIn ( if any)"
                className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5F259E] outline-none text-gray-700"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div className="relative">
                    <select className="w-full px-4 py-4 border border-gray-300 rounded-md appearance-none focus:ring-2 focus:ring-[#5F259E] outline-none text-gray-400 bg-white">
                        <option>Years in operation</option>
                        <option>Private Limited</option>
                        <option>Partnership</option>
                        <option>Sole Proprietorship</option>
                    </select>
                    <BiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
                </div>
            </div>
            <button className="w-full bg-[#5F259E] hover:bg-[#5b21b6] text-white font-bold py-4 rounded-xl transition-colors mt-8"
                onClick={next}>
                Continue
            </button>
        </>
    );
};


export const ThirdForm = ({ next }) => {
    return (
        <>
            <div className="space-y-6">
                <input
                    type="text"
                    placeholder="Bank Account Details"
                    className="w-full px-4 py-4 border border-[#D0D5DD] text-[16px] rounded-md focus:ring-2 focus:ring-[#5F259E] outline-none text-[#707070]"
                />
                <div className="w-full">
                    <button className="w-full flex  items-center justify-between p-4 text-[15px]  border border-[#5F259E] text-[#5F259E] font-[500] rounded-full ">
                        Upload Cancelled Cheque
                        <BiUpload size={18} />
                    </button>
                </div>
                <div className="w-full">
                    <button className="w-full flex  items-center justify-between p-4 text-[15px]  border border-[#5F259E] text-[#5F259E] font-[500] rounded-full ">
                        Upload Professional Photo
                        <BiUpload size={18} />
                    </button>
                </div>
                <div className="w-full flex items-center gap-3 ">
                    <input type="checkbox" className="scale-150 accent-[#5F259E] border-gray-400 rounded-[3px]  " />
                    <div className="text-[14px"> <span className="text-[#707070]">I agree to the </span>Terms & Conditions <span className="text-[#707070]">and </span> Privacy Policy</div>
                </div>
                <button className="w-full bg-[#5F259E] hover:bg-[#5b21b6] text-white font-bold py-4 rounded-md transition-colors mt-8"
                    onClick={next}>
                    Continue
                </button>
            </div>
        </>
    );
}

export const FourthForm = ({ next }) => {
    return (
        <>
            <div className="space-y-6">
                <input
                    type="text"
                    placeholder="Medical Registration Number"
                    className="w-full px-4 py-4 border border-[#D0D5DD] text-[16px] rounded-md focus:ring-2 focus:ring-[#5F259E] outline-none text-[#707070]"
                />
                <div className="w-full">
                    <button className="w-full flex  items-center justify-between p-4 text-[15px]  border border-[#5F259E] text-[#5F259E] font-[500] rounded-full ">
                        Upload Medical Registration Proof
                        <BiUpload size={18} />
                    </button>
                </div>
                <div className="relative">
                    <select className="w-full px-4 py-4 border border-gray-300 rounded-md appearance-none focus:ring-2 focus:ring-[#5F259E] outline-none text-gray-400 bg-white">
                        <option>Specialization</option>
                        <option>Private Limited</option>
                        <option>Partnership</option>
                        <option>Sole Proprietorship</option>
                    </select>
                    <BiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
                </div>
                <input
                    type="text"
                    placeholder="Clinic/Hospital Affiliation"
                    className="w-full px-4 py-4 border border-[#D0D5DD] text-[16px] rounded-md focus:ring-2 focus:ring-[#5F259E] outline-none text-[#707070]"
                />
                <div className="w-full">
                    <button className="w-full flex  items-center justify-between p-4 text-[15px]  border border-[#5F259E] text-[#5F259E] font-[500] rounded-full ">
                        Upload Clinic Images
                        <BiUpload size={18} />
                    </button>
                </div>
                <div className="relative">
                    <select className="w-full px-4 py-4 border border-gray-300 rounded-md appearance-none focus:ring-2 focus:ring-[#5F259E] outline-none text-gray-400 bg-white">
                        <option>Consultation Type</option>
                        <option>Private Limited</option>
                        <option>Partnership</option>
                        <option>Sole Proprietorship</option>
                    </select>
                    <BiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
                </div>
                <button className="w-full bg-[#5F259E] hover:bg-[#5b21b6] text-white font-bold py-4 rounded-md transition-colors mt-8"
                    onClick={next}>
                    Continue
                </button>
            </div>
        </>
    );
}
const forms = [
    FirstForm,
    SecondForm,
    ThirdForm,
    FourthForm,
]

const headers = [
    {
        tittle: "Register Your Business on  ProZSphere",
        desc: "Create a verified business profile and expand your professional reach  across Finance, Legal, Healthcare, or Infrastructure sectors."
    },
    {
        tittle: "Start with Your Business Identity",
        desc: "Tell us about your business so we can create your professional profile."
    },
    {
        tittle: "Secure Your Payments & Compliance",
        desc: "Provide your bank details and upload compliance documents for verification."
    },
    {
        tittle: "Healthcare Expert Verification",
        desc: "Add your medical credentials to get verified as a trusted healthcare provider."
    },
]


export default function Register() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [step, setStep] = useState(0);
    const CurrentFrom = forms[step];
    const next = () => setStep((prev) => prev + 1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="h-screen w-full grid grid-cols-2 bg-cover font-inter overflow-hidden " style={{ backgroundImage: "url('/bgimages/login-bg.jpg')" }}>
            <div className="h-full w-full overflow-hidden ">
                <div className="h-full w-full overflow-hidden ">
                    <img
                        src={images[currentIndex]}
                        className="relative translate-x-[15%] -translate-y-[5%] transition-all duration-700 scale-70"
                        alt="Login image"
                    />
                </div>
            </div>
            <div className="p-8 overflow-y-scroll no-scrollbar">
                <div className="h-full ms-auto w-[90%] rounded-[30px] bg-white ">
                    <div className="h-full w-[70%] mx-auto overflow-auto no-scrollbar text-center flex flex-col gap-6 ">
                        <div className="mt-10">
                            <h1 className="text-[40px] font-[600]  leading-[50px]">{headers[step].tittle}</h1>
                            <p className="text-[18px] text-[#404040]  leading-[25px] mt-3 ">{headers[step].desc}</p>
                        </div>
                        <div className="w-[85%] mx-auto my-5 space-y-5">
                            <CurrentFrom next={next} />
                        </div>
                        <div className=" w-[85%] mx-auto flex gap-2 my-10 ">
                            <div className={`h-[7px] flex-1  rounded-full ${step >= 0 ? 'bg-[#5F259E]' : 'bg-[#D7D7D7]'}`} />
                            <div className={`h-[7px] flex-1  rounded-full ${step >= 1 ? 'bg-[#5F259E]' : 'bg-[#D7D7D7]'}`} />
                            <div className={`h-[7px] flex-1  rounded-full ${step >= 2 ? 'bg-[#5F259E]' : 'bg-[#D7D7D7] '}`} />
                            <div className={`h-[7px]  flex-1  rounded-full ${step >= 3 ? 'bg-[#5F259E]' : 'bg-[#D7D7D7] '}`} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}


