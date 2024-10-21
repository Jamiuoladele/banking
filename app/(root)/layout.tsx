import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = { firstName: "Laplacejnr", lastName: "JSM" };

  return (
    <main className="flex h-screen w-full">
   
      <Sidebar user={loggedIn} />

    
      <div className="flex flex-col w-full relative">
    
        <header className="flex justify-between items-center p-4 bg-white shadow">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <MobileNav user={loggedIn} />
        </header>

       
        <div className="flex-grow p-4">{children}</div>
      </div>
    </main>
  );
}