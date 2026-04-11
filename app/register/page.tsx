"use client";

import { RiBuilding2Line, RiScales3Line, RiThermometerLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { BiCalculator } from "react-icons/bi";
const images = [
    "/bgimages/l1.png",
    "/bgimages/l2.png",
    "/bgimages/l3.png",
    "/bgimages/l4.png",
];

export const FirstForm = () => {
    const categories = [
        { id: 'healthcare', name: 'Healthcare', icon: RiThermometerLine },
        { id: 'tax', name: 'Tax Experts', icon: BiCalculator },
        { id: 'legal', name: 'Legal Expert', icon: RiScales3Line },
        { id: 'infrastructure', name: 'Infrastructure', icon: RiBuilding2Line },
    ];
    const [selected, setSelected] = useState('healthcare');
    return (
        <>
            <div>
                <h1 className="text-[42px] font-[600]  leading-[50px]">Register Your Business on <br /> ProZSphere</h1>
                <p className="text-[18px] text-[#404040]  leading-[25px] mt-3 ">Create a verified business profile and expand your professional reach <br /> across Finance, Legal, Healthcare, or Infrastructure sectors.</p>
            </div>
            <div className="w-[470px] mx-auto space-y-6">
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
                                    <Icon  size="28px" />
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
                <button className="w-full bg-[#5F259E] hover:bg-[#5b21b6] text-white font-bold py-4 rounded-xl transition-colors mt-8">
                    Continue
                </button>
            </div>
        </>
    );
}

const forms = [
    FirstForm
]

export default function Register() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [step, setStep] = useState(0);
    const CurrentFrom = forms[step];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="h-screen w-full grid grid-cols-2 bg-cover font-inter " style={{ backgroundImage: "url('/bgimages/login-bg.jpg')" }}>
            <div className="h-full w-full overflow-hidden ">
                <div className="h-full w-full overflow-hidden ">
                    <img
                        src={images[currentIndex]}
                        className="relative translate-x-[15%] -translate-y-[5%] transition-all duration-700 scale-70"
                        alt="Login image"
                    />
                </div>
            </div>
            <div className="p-8">
                <div className="container h-full w-[90%] ms-auto  rounded-[30px] bg-white flex flex-col justify-evenly items-center">
                    <div className="min-w-[500px] space-y-12 mx-auto text-center ">
                        <CurrentFrom />
                    </div>
                    <div className="w-[470px] mx-auto flex gap-2 mt-10">
                        <div className={`h-[7px] flex-1  rounded-full ${step == 0 ? 'bg-[#5F259E]' : 'bg-[#D7D7D7]'}`} />
                        <div className={`h-[7px] flex-1  rounded-full ${step == 1 ? 'bg-[#5F259E]' : 'bg-[#D7D7D7]'}`} />
                        <div className={`h-[7px] flex-1  rounded-full ${step == 2 ? 'bg-[#5F259E]' : 'bg-[#D7D7D7] '}`} />
                        <div className={`h-[7px]  flex-1  rounded-full ${step == 3 ? 'bg-[#5F259E]' : 'bg-[#D7D7D7] '}`} />
                    </div>
                </div>
            </div>
        </main>
    );
}


