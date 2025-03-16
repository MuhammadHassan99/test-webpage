import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProfileNav = () => {
  return (
    <div className="grid grid-col-3 gap-[10px]">
      <div className="rounded-[10px] bg-white h-[248px] w-[346px]">
        <div className="">
          <Image
            src="/cover-photo.svg"
            alt="cover photo"
            width={346}
            height={100}
            priority
            className="rounded-t-[10px]"
          />
        </div>
        <div className="relative">
          <div className="absolute -top-[45px] right-[64px] grid grid-col-2 justify-items-center ">
            <div className="">
              <Image
                src="/picture.svg"
                alt="profile pic"
                width={86}
                height={86}
                priority
                className="rounded-full"
              />
            </div>
            <div className="grid justify-items-center">
              <p className="text-[18px] font-semibold">Albert Flores</p>
              <p className="text-[14px]">Senior Product Designer | UI/UX</p>
              <p className="text-[14px]">
                Designer | Graphic Designer | Web...
              </p>
              <p className="text-[12px]">Clinton, Maryland</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[10px] bg-white w-[346px]">
        <div className="py-1.5 px-[20px]">
          <ul>
            <li className=" border-b-1 border-b-[#E9ECEF] cursor-pointer">
              <div className="flex justify-between items-center py-2">
                <p className="text-[14px]">Profile Visitors</p>
                <p className="text-[16px] text-[#0154AA]">140</p>
              </div>
            </li>
            <li className="border-b-1 border-b-[#E9ECEF] cursor-pointer">
              <div className="flex justify-between items-center py-2">
                <p className="text-[14px]">Resume Viewers</p>
                <p className="text-[16px] text-[#0154AA]">20</p>
              </div>
            </li>
            <li className="cursor-pointer">
              <div className="flex justify-between items-center py-2">
                <p className="text-[14px]">My Jobs</p>
                <p className="text-[16px] text-[#0154AA]">80</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-[10px] w-[346px]">
        <div className="p-[10px] flex items-center justify-between">
          <div>
            <p className="text-[16px] font-semibold">My Calendar</p>
            <p className="text-[14px] color-[#737A91] font-light cursor-pointer">
              Upcoming Interviews
            </p>
          </div>
          <div className="pr-2 cursor-pointer">
            <Image
              src="/down-icon.svg"
              alt="down icon"
              width={12.97}
              height={7.13}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
