import Image from "next/image";

export default function JobCard() {
  return (
    <div className=" rounded-[10px] bg-white">
      <div className="grid grid-col-3 content-between py-[10px] px-[20px]">
        <div className="">
          <div>
            <p className="text-[#333333] text-[10px] font-bold">Promoted</p>
          </div>
          <div className="flex items-center justify-between py-1">
            <div className="bg-[#FAFAFA] rounded-[9.11px]">
              <div className="py-[8px] px-[6px]">
                <Image
                  src="/job-logo.svg"
                  alt="logo"
                  width={23}
                  height={21.4}
                  priority
                  className=""
                />
              </div>
            </div>

            <div>
              <p className="text-[14px]">UI/UX Designer</p>
              <p className="text-[12px]">Teams</p>
            </div>
          </div>
          <div className="pt-1 pb-3">
            <div className="flex items-center">
              <Image
                src="/location.svg"
                alt="location-pin"
                width={12}
                height={12}
                priority
              />
              <p className="text-[12px] pl-2">Seattle,USA (Remote)</p>
            </div>

            <div className="flex items-center">
              <Image
                src="/clock.svg"
                alt="time-updated"
                width={12}
                height={12}
                priority
              />
              <p className="text-[12px] pl-2">1 day ago | 22 applicants</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pb-1">
          <button className="bg-[#0154AA] rounded-[6.13px] cursor-pointer">
            <p className="text-white text-[12px] py-[10px] px-[30px]">
              Apply Now
            </p>
          </button>
          <div className="cursor-pointer">
            <Image
              src="/save.svg"
              alt="save"
              width={11.43}
              height={16}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
