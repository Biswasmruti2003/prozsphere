import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prozsphere Dashboard",
  description: "Prozsphere Medical Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="font-sans antialiased text-[#333333] bg-[#FAFBFC] min-h-screen">
        <div className="flex bg-[#FAFAFA] min-h-screen">
          <Navbar />
          {/* Main Content Area - offset by sidebar width */}
          <main className="flex-1 ml-[320px] p-10 max-w-[1600px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
