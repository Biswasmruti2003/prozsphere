"use client"

import Footer from "@/components/footer";
import Heading from "@/components/heading";

const earningsData = [
  {
    date: "10 Aug 25",
    name: "Rahul Menon",
    service: "General Checkup",
    payment: "UPI",
    gross: 1000,
    fee: 50,
    net: 930,
    status: "Paid",
  },
  {
    date: "10 Aug 25",
    name: "Asha Nair",
    service: "Dermatology",
    payment: "Card",
    gross: 1500,
    fee: 75,
    net: 1395,
    status: "Pending",
  },
  {
    date: "10 Aug 25",
    name: "Sunil Kumar",
    service: "Therapy Session",
    payment: "Wallet",
    gross: 800,
    fee: 40,
    net: 744,
    status: "Paid",
  },
  {
    date: "10 Aug 25",
    name: "Priya Das",
    service: "Pediatrics",
    payment: "UPI",
    gross: 1200,
    fee: 50,
    net: 1116,
    status: "Paid",
  },
  {
    date: "10 Aug 25",
    name: "Naveen P",
    service: "Dental Cleaning",
    payment: "UPI",
    gross: 1800,
    fee: 75,
    net: 1674,
    status: "Failed",
  },
  {
    date: "10 Aug 25",
    name: "Rajesh Kumar",
    service: "General Checkup",
    payment: "UPI",
    gross: 1800,
    fee: 50,
    net: 1800,
    status: "Paid",
  },
  {
    date: "10 Aug 25",
    name: "Neha Verma",
    service: "Telemedicine",
    payment: "UPI",
    gross: 1800,
    fee: 50,
    net: 1800,
    status: "Paid",
  },
  {
    date: "10 Aug 25",
    name: "Meera Nair",
    service: "Telemedicine",
    payment: "UPI",
    gross: 1800,
    fee: 50,
    net: 1800,
    status: "Paid",
  },
  {
    date: "10 Aug 25",
    name: "Neha Verma",
    service: "General Checkup",
    payment: "UPI",
    gross: 1800,
    fee: 50,
    net: 1800,
    status: "Paid",
  },
  {
    date: "10 Aug 25",
    name: "Anjali S",
    service: "Telemedicine",
    payment: "UPI",
    gross: 1800,
    fee: 50,
    net: 1800,
    status: "Paid",
  },
];

export default function PaymentsEarningsPage() {
  const getStatusStyle = (status: any) => {
    switch (status) {
      case "Paid":
        return "bg-[#D7F7C2] text-[#006908] border-[#A6EB84]";
      case "Pending":
        return "bg-[#FCEDB9] text-[#A82C00] border-[#FCD579]";
      case "Failed":
        return "bg-[#FFE7F2] text-[#B3093C] border-[#FFCCDF]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const heading = "Payments & Earnings";
  return (
    <div className="relative font-inter">
      <Heading heading={heading} />
      <div className="mt-5  overflow-hidden ">
        <table className="w-full text-left ">
          <thead className="p-10">
            <tr className=" text-[#718096] text-[16px] font-[500] leading-[150%] tracking-[0.2px]">
              <td className="py-5 px-10">Date</td>
              <td className="py-5 px-10">Patient Name</td>
              <td className="py-5 px-5">Service Type</td>
              <td className="py-5 px-5">Payment Mode</td>
              <td className="py-5 px-5">Gross Fee (₹)</td>
              <td className="py-5 px-5">Platform Fee (5%)</td>
              <td className="py-5 px-5">Net Earnings (₹)</td>
              <td className="py-5 px-10 ">Status</td>
            </tr>
          </thead>
          <tbody>
            {earningsData.map((p, index) => (
              <tr key={index} className="border-t  border-[#EEEFF2] text-[15px] font-[600] leading-[150%] tracking-[0.3px]">
                <td className="py-4 px-10 ">{p.date}</td>
                <td className="py-4 px-10">{p.name}</td>
                <td className="py-4 px-5">{p.service}</td>
                <td className="py-4 px-5">{p.payment}</td>
                <td className="py-4 px-5">{p.fee}</td>
                <td className="py-4 px-5">{p.net}</td>
                <td className="py-4 px-5">{p.status !== null ? p.status : (<div className="w-[15px] border"></div>)}</td>
                <td className="py-5 px-10">
                  <div
                    className={`text-center border rounded-md me-16 text-[12px] ${getStatusStyle(
                      p.status
                    )}`}
                  >
                    {p.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
