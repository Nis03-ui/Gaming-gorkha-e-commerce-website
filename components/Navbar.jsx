"use client";

import Image from "next/image";
import Link from "next/link";
import { User, ShoppingCart, Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full h-20 bg-white flex items-center justify-between px-6 shadow-md">

      {/* LEFT: Logo */}
      <div className="flex items-center space-x-3">
        <Image src={"/gaming-gorkha.png"} alt="Gaming gorkha" width={100} height={100} />
        <Image src={"/font-logo.png"} alt="Font logo" width={120} height={60} />
      </div>

      {/* CENTER: Links */}
      <div className="flex items-center space-x-6">
        <Link href="/Home" className="font-bold text-xl hover:text-red-500 hover:underline">Home</Link>
        <Link href="/Physical_disc" className="font-bold text-xl hover:text-red-500 hover:underline">Physical Discs</Link>
        <Link href="/Digital_Codes" className="font-bold text-xl hover:text-red-500 hover:underline">Digital Codes</Link>
        <Link href="/Games" className="font-bold text-xl hover:text-red-500 hover:underline">Games</Link>
        <Link href="/Subscription" className="font-bold text-xl hover:text-red-500 hover:underline">Subscription</Link>
        <Link href="/Wallets" className="font-bold text-xl hover:text-red-500 hover:underline">Wallets</Link>
      </div>

      {/* RIGHT: Search + Icons */}
      <div className="flex items-center space-x-4">

        {/* SEARCH */}
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black w-5 h-5" />

          <input
            type="text"
            placeholder="Search PS5 games"
            className="w-full h-10 pl-10 pr-3 border border-gray-300 rounded-lg 
                       outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* ICONS */}
        <div className="flex items-center space-x-5">
          <User className="cursor-pointer hover:text-red-500 transition" />
          <ShoppingCart className="cursor-pointer hover:text-red-500 transition" />
          <Bell className="cursor-pointer hover:text-red-500 transition" />
        </div>

      </div>
    </div>
  );
}