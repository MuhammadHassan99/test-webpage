"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const links = [
    "Find Jobs",
    "Top Companies",
    "Job Tracker",
    "My Calendar",
    "Documents",
    "Message",
    "Notifications",
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileClick = () => {
    setIsLogoutClicked(!isLogoutClicked);
  };

  return (
    <div className="flex justify-evenly items-center py-5">
      <div>
        <div className="cursor-pointer">
          <Image
            src="/logo.svg"
            alt="logo"
            width={41.09}
            height={38.45}
            priority
          />
        </div>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center">
          {links.map((link) => (
            <li
              key={link}
              className="px-4 text-[#737A91] cursor-pointer text-[13px] hover:text-[#0154AA] hover:font-semibold"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center md:hidden">
        <button onClick={toggleMobileMenu} className="text-[#737A91]">
          Menu
        </button>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center ">
          <div className="flex items-center justify-evenly py-2 px-2 lg:px-4 bg-[#F6F9FF] rounded-[8px]">
            <div className="px-2">
              <Image
                src="/search.svg"
                alt="search"
                width={15}
                height={15}
                priority
                className=""
              />
            </div>
            <input className="focus:outline-0" placeholder="Search" />
          </div>
          <div className="px-4">
            <button className="bg-[#0154AA] rounded-[8px] px-4 py-2 cursor-pointer">
              <p className="text-[12px] lg:text-[14px] text-white">
                Resume Builder
              </p>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="cursor-pointer">
          <Image
            src="/profile-pic.svg"
            alt="profile-pic"
            width={38}
            height={38}
            priority
            onClick={toggleProfileClick}
          />
        </div>
      </div>

      {isLogoutClicked && (
        <div className="absolute top-15 flex justify-center items-center right-0 bg-white z-10 w-[100px] h-[80px] px-5 rounded-[10px]">
          <p className="text-center cursor-pointer hover:underline">Logout</p>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-10">
          <ul className="flex flex-col items-center py-4">
            {links.map((link) => (
              <li
                key={link}
                className="py-2 text-[#737A91] cursor-pointer hover:text-[#0154AA]"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
