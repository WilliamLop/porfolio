import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContexts from "@/context/active-contents";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "William | Personal Porfolio",
  description: "William is a Front-end developer with 1 year of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 relative dark:bg-gray-900 dark:text-gray-50 
      text-gray-950 pt-28 sm:pt-36 dark:text-opacity-80`}>
        <div className="gradient  w-[31-25rem] bg-[#fbeee2] top-[-6rem] blur-[10rem] sm:w-[68.74rem]
        right-[11rem] -z-20 h-[31.25rem] rounded-full dark:bg-[#946263]">

        </div>
        <div className="top-[-1rem] w-[50rem] left-[-35rem]  gradient bg-[#24ABF2]/20 xs -z-20 blur-[10rem]
        md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]
        sm:w-[68.75rem]">
        </div>

        <ThemeContextProvider>
          
          <ActiveSectionContexts>
            <Header />
            {children}
            <Toaster position="top-right"/>
            <Footer />
          </ActiveSectionContexts>

          <ThemeSwitch />

        </ThemeContextProvider>


      </body>
    </html>
  );
}
