import Image from "next/image";
import Form from "next/form";

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

  return (
    <div className="flex justify-around items-center h-15">
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
      <div className="">
        <ul className="flex justify-between">
          {links.map((link) => (
            <li
              key={link}
              className="px-5 text-[#737A91] cursor-pointer text-[16px] hover:text-[#0154AA]"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-around items-center h-auto">
        <div className="flex items-center h-auto">
          <div className="flex items-center justify-evenly w-[261px] h-[39px] bg-[#F6F9FF] rounded-[8px]">
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
          <div className="px-4 \">
            <button className="bg-[#0154AA] rounded-[8px] h-[39px] w-[147px] cursor-pointer">
              <p className="text-[16px]  text-white">Resume Builder</p>
            </button>
          </div>
        </div>
        <div>
          {" "}
          <Image
            src="/profile-pic.svg"
            alt="profile-pic"
            width={38}
            height={38}
            priority
          />
        </div>
      </div>
    </div>
  );
}

// <nav>
//       <ul>
//         <li>
//           <Link href="/profile">
//             <a>Profile</a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/settings">
//             <a>Settings</a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/logout">
//             <a>Logout</a>
//           </Link>
//         </li>
//       </ul>
//     </nav>
