import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="h-screen rounded-3xl">
      <nav className="h-full flex flex-col shadow-sm">
        <div className="p-8 py-12 flex justify-between items-center mx-auto text-left">
          <h2 className="text-4xl font-bold text-white">Board.</h2>
        </div>
        <ul className=" mx-auto text-center">
          <li className="flex items-center py-2 px-3 my-1 cursor-pointer">
            <Image
              src="/assets/dashboard_icon.png"
              width={18}
              height={18}
              alt="dashboard icon"
            />
            <span className="w-28 ml-3 text-white text-left">Dashboard</span>
          </li>
          <li className=" flex items-center py-2 px-3 my-1 cursor-pointer">
            <Image
              src="/assets/transaction_icon.png"
              width={18}
              height={18}
              alt="dashboard icon"
            />
            <span className="w-28 ml-3 text-white text-left">Transactions</span>
          </li>
          <li className=" flex items-center py-2 px-3 my-1 cursor-pointer">
            <Image
              src="/assets/schedule_icon.png"
              width={18}
              height={18}
              alt="dashboard icon"
            />
            <span className="w-28 ml-3 text-white text-left">Schedules</span>
          </li>
          <li className=" flex items-center py-2 px-3 my-1 cursor-pointer">
            <Image
              src="/assets/user_icon.png"
              width={18}
              height={18}
              alt="dashboard icon"
            />
            <span className="w-28 ml-3 text-white text-left">Users</span>
          </li>
          <li className=" flex items-center py-2 px-3 my-1 cursor-pointer">
            <Image
              src="/assets/setting_icon.png"
              width={18}
              height={18}
              alt="dashboard icon"
            />
            <span className="w-28 ml-3 text-white text-left">Settings</span>
          </li>
        </ul>
        <div className="flex flex-col items-center justify-end gap-3 pb-12 font-light h-36 ">
          <span className="text-white text-left w-28">Help</span>
          <span className="text-white text-left w-28">Contact Us</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
