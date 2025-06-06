
import { TbDashboard } from "react-icons/tb";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { BiLogoReact } from "react-icons/bi";
import { NavLink } from "@remix-run/react";

export default function Navbar() {
  return (
    <div className="flex p-2 bg-gray-300 mt-5 mx-5 justify-center space-x-6 w-[500px] rounded-[30px]">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${
            isActive ? "text-green-500 bg-white rounded-3xl p-1" : "text-gray-600"
          }`
        }
      >
        {({ isActive }) => (
          <div className="flex items-center  gap-1">
            <TbDashboard
              className={`text-[25px] ${
                isActive ? "text-green-500  bg-white rounded-3xl p-1" : "text-gray-600"
              }`}
            />
            <span className="text-xs">Dashboard</span>
          </div>
        )}
      </NavLink>

      <NavLink
        to="/post-reels"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${
            isActive ? "text-green-500  bg-white rounded-3xl p-1" : "text-gray-600"
          }`
        }
      >
        {({ isActive }) => (
          <div className="flex items-center gap-1">
            <MdOutlineDashboardCustomize 
              className={`text-[25px] ${
                isActive ? "text-green-500  bg-white rounded-3xl p-1" : "text-gray-600"
              }`}
            />
            <span className="text-xs">Post & Reels</span>
          </div>
        )}
      </NavLink>

      <NavLink
        to="/stories"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${
            isActive ? "text-green-500  bg-white rounded-3xl p-1" : "text-gray-600"
          }`
        }
      >
        {({ isActive }) => (
          <div className="flex items-center gap-1">
            <MdOutlineHistoryToggleOff
              className={`text-[25px] ${
                isActive ? "text-green-500  bg-white rounded-3xl p-1" : "text-gray-600"
              }`}
            />
            <span className="text-xs">Stories</span>
          </div>
        )}
      </NavLink>

      <NavLink
        to="/automations"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${
            isActive ? "text-green-500  bg-white rounded-3xl p-1" : "text-gray-600"
          }`
        }
      >
        {({ isActive }) => (
          <div className="flex items-center gap-1">
            <BiLogoReact
              className={`text-[25px] ${
                isActive ? "text-green-500  bg-white rounded-3xl p-1" : "text-gray-600"
              }`}
            />
            <span className="text-xs">My Automations</span>
          </div>
        )}
      </NavLink>
    </div>
  );
}
