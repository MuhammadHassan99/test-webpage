import Image from "next/image";
import JobCard from "./JobCard";
import ProfileNav from "./ProfileNav";
// import { FaSearch } from "react-icons/fa";

export default function Content() {
  const count = [1, 2, 3, 4, 5];
  return (
    <div className="h-full flex items-start bg-[#F4F4F4] pt-[25px] px-[50px]">
      <div>
        <ProfileNav />
      </div>
      <div className="px-5">
        <div>
          <p className="text-[22px]">Find your dream job, Albert</p>
          <p className="text-[14px]">
            Explore the latest job openings and apply for the best opportunities
            available today!
          </p>
        </div>
        <div className="">
          <div className="flex items-center rounded-[10px] h-[77px] p-2 bg-white">
            <input
              type="text"
              placeholder="Job Title, Company, or Keywords"
              className="flex-1 p-2 outline-none"
              // value={query}
              // onChange={(e) => setQuery(e.target.value)}
            />
            <select
              className="border-l border-[#E9ECEF] p-2 outline-none"
              // value={location}
              // onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              <option value="remote">Remote</option>
              <option value="london">London</option>
            </select>
            <select
              className="border-l p-2 border-[#E9ECEF] outline-none"
              // value={jobType}
              // onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">Job Type</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
            </select>
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
          <div className="border-1 border-[#737A91] rounded-[5px] py-[8px] px-[15px] mx-2 cursor-pointer">
            <p className="text-[12px] text-[#737A91]">Frontend</p>
          </div>
          <div className="border-1 border-[#737A91] rounded-[5px] py-[8px] px-[15px] mx-2 cursor-pointer">
            <p className="text-[12px] text-[#737A91]">Backend</p>
          </div>
          <div className="border-1 border-[#737A91] rounded-[5px] py-[8px] px-[15px] mx-2 cursor-pointer">
            <p className="text-[12px] text-[#737A91]">Grapghic Designer</p>
          </div>
        </div>
        <div>
          <div className="flex items-center pb-[15px]">
            <p className="text-[18px]">Featured jobs</p>
            <p className="px-2 text-[14px] text-[#0154AA] underline">
              See Featured Jobs
            </p>
          </div>
          <div className="flex">
            {count.map((i) => (
              <div key={i} className="pr-5">
                <JobCard />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center py-[15px]">
            <p className="text-[18px]">Recommended Jobs</p>
            <p className="px-2 text-[14px] text-[#0154AA] underline">
              {" "}
              See Recommended Jobs
            </p>
          </div>
          <div className="flex">
            {count.map((i) => (
              <div key={i} className="pr-5">
                <JobCard promoted={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
