import Image from "next/image";
import JobCard from "./JobCard";
import ProfileNav from "./ProfileNav";

export default function Content() {
  const count = [1, 2, 3, 4, 5];
  return (
    <div className="bg-[#F4F4F4] py-6 md:pl-10">
      <div className="flex items-start">
        <div className="hidden md:block">
          <ProfileNav />
        </div>
        <div className="px-3 overflow-hidden">
          <div className="pb-[5px]">
            <p className="text-[22px] text-[#333333] font-semibold text-center md:text-start">
              Find your dream job,{" "}
              <span className="text-[#0154AA]">Albert!</span>
            </p>
            <p className="text-[14px] text-center md:text-start">
              Explore the latest job openings and apply for the best
              opportunities available today!
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center rounded-[10px] h-[77px] p-2 bg-white">
              <input
                type="text"
                placeholder="Job Title, Company, or Keywords"
                className="flex-1 p-2 outline-none"
              />
              <div className="border-l border-[#E9ECEF]">
                <select className="px-5 outline-none text-[14px] text-[#585D6E] mr-5 cursor-pointer">
                  <option value="">Select Location</option>
                  <option value="remote">Remote</option>
                  <option value="london">On-site</option>
                </select>
              </div>
              <div className="border-l border-[#E9ECEF]">
                <select className="px-5 outline-none text-[14px] text-[#585D6E] mr-5 cursor-pointer">
                  <option value="">Job Type</option>
                  <option value="full-time">Full-Time</option>
                  <option value="part-time">Part-Time</option>
                </select>
              </div>
              <button className="cursor-pointer bg-[#0154AA] text-white w-[140px] h-[37px] rounded-[8px] ml-2 flex items-center justify-center">
                <Image
                  src="/white-search.svg"
                  alt="search"
                  width={15}
                  height={15}
                  priority
                  className="font-white"
                />{" "}
                <p className="px-2">Search</p>
              </button>
            </div>
          </div>
          <div className="flex items-center border-b-1 pt-3 pb-2 border-[#E9ECEF]">
            <div>
              <p className="text-[#737A91] text-[14px]">Similiar:</p>
            </div>

            <p className="text-[12px] text-[#737A91] border-1 border-[#737A91] rounded-[5px] py-[8px] px-[15px] mx-2 cursor-pointer hover:bg-[#0154AA] hover:text-white hover:border-[#F4F4F4]">
              Frontend
            </p>

            <p className="text-[12px] text-[#737A91] border-1 border-[#737A91] rounded-[5px] py-[8px] px-[15px] mx-2 cursor-pointer hover:bg-[#0154AA] hover:text-white hover:border-[#F4F4F4]">
              Backend
            </p>

            <p className="min-w-[120px] text-[12px] text-[#737A91] border-1 border-[#737A91] rounded-[5px] py-[8px] px-[15px] mx-2 cursor-pointer hover:bg-[#0154AA] hover:text-white hover:border-[#F4F4F4]">
              Graphic Designer
            </p>
          </div>
          <div className="border-b border-[#E9ECEF] py-4">
            <div className="flex items-center pb-[15px]">
              <p className="text-[18px]">Featured jobs</p>
              <p className="px-2 text-[14px] text-[#0154AA] hover:underline cursor-pointer">
                See Featured Jobs
              </p>
            </div>
            <div className="grid justify-items-center gap-4 md:flex md:overflow-x-auto md:pb-2">
              {count.map((i) => (
                <div key={i} className="pr-5 ">
                  <JobCard />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center py-[15px]">
              <p className="text-[18px]">Recommended Jobs</p>
              <p className="px-2 text-[14px] text-[#0154AA] hover:underline cursor-pointer">
                {" "}
                See Recommended Jobs
              </p>
            </div>
            <div className="grid justify-items-center gap-4 md:flex  md:overflow-x-auto md:pb-2">
              {count.map((i) => (
                <div key={i} className="pr-5">
                  <JobCard promoted={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
