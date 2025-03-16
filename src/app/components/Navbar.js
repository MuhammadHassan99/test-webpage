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
    <div className="flex justify-around items-center h-15 bg-red-200">
      <div>
        <div>
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
              className="px-5 text-[#737A91] cursor-pointer text-[16px]"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-around items-center h-auto">
        <div className="flex items-center h-auto">
          {/* <Form action="/search">
            <input name="query" />
            <button>Resume Builder</button>
          </Form> */}
          <div>
            <input className="bg-yellow-200" />
          </div>
          <div className="bg-[#0154AA] rounded-[8px]">
            <button className="">
              <p className="text-[16px] px-[20px] py-[10px] text-white">
                Resume Builder
              </p>
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
