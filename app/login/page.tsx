"use client";

import { useState, useEffect } from "react";

const images = [
    "/bgimages/l1.png",
    "/bgimages/l2.png",
    "/bgimages/l3.png",
    "/bgimages/l4.png",
];

export default function Login() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval); // cleanup
    }, []);

    return (
        <main className="h-screen w-full grid grid-cols-2 bg-cover font-inter " style={{ backgroundImage: "url('/bgimages/login-bg.jpg')" }}>
            <div className="h-full w-full overflow-hidden ">
                <img
                    src={images[currentIndex]}
                    className="relative translate-x-[15%] -translate-y-[5%] transition-all duration-700 scale-68"
                    alt="Login image"
                />
            </div>
            <div className="p-10">
                <div className="container h-full w-full  rounded-[30px] bg-white flex flex-col justify-center items-center">
                    <div className=" w-[500px] space-y-6 mx-auto text-center ">
                        <div>
                            <h1 className="text-[42px] font-[600]  leading-[80px]">Welcome to ProZSphere</h1>
                            <p className="text-[18px] text-[#404040]  leading-[26px]">Create your account and take the first step towards <br /> seamless event management.</p>
                        </div>
                        <div className="p-5">
                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="relative">
                                    <input type="email" placeholder="Email" className="w-full px-5 py-4 text-[16px] border border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" />
                                </div>
                                <div className="relative">
                                    <input type="password" placeholder="Password" className="w-full px-5 py-4 text-[16px] border border-[#D0D5DD] shadow-sm shadow-[#1018280D] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" />
                                </div>
                                {/* Forgot Password Link */}
                                <div className="flex justify-end">
                                    <button type="button" className="text-[#5F259E] text-[18px] font-[600] hover:text-purple-800 transition-colors">Forgot Password? </button>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full text-[18px] font-[600] bg-[#5F259E] hover:bg-[#4c1d95] text-white font-semibold py-4 rounded-md shadow-lg shadow-purple-200 transition-all active:scale-[0.98] mt-5"
                                > Submit</button>
                            </form>
                        </div>
                        <div className="text-[20px] font-[600] ">
                            <span>Not registered? </span>
                            <button type="button" className="text-[#5F259E] hover:text-purple-800 transition-colors"> Create an account</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}