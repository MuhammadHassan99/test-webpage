import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProfileNav = () => {
  return (
    <div className="grid grid-col-3 gap-[10px]">
      <div>profile info</div>
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
      <div className="bg-white rounded-[10px]">
        <div className="p-[10px] flex items-center justify-between">
          <div>
            <p className="text-[16px] font-semibold">My Calendar</p>
            <p className="text-[14px] color-[#737A91] font-light">
              Upcoming Interviews
            </p>
          </div>
          <div>
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
