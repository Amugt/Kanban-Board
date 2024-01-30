import React from "react";
import {
  Search,
  TrelloLogo,
  AlertCircle,
  Plus,
  Bell,
  Logo,
} from "../assets/IconsManager";
import { ReactSVG } from "react-svg";
import { photo1 } from "../assets/ImagesManager";
export default function Navbar() {
  return (
    <div className="fixed w-full h-14 bg-white border-b-2 px-[16px] py-[12px]">
      <div className="flex justify-between flex-nowrap">
        <div className="flex items-center gap-3 ">
          <ReactSVG className="hidden sm:flex" src={Logo} />
          <div className=" hidden sm:flex h-8 border-gray-300 border-l-[1px]"></div>

          <ReactSVG src={TrelloLogo} width={30} height={30} />
          <h1 className="text-lg ">Boards</h1>
          <div className=" hidden sm:flex h-8 border-gray-300 border-l-[1px]"></div>
          <ReactSVG src={Search} className="sm:hidden" width={20} height={20} />
          <div className=" hidden sm:flex    items-center overflow-hidden px-4 bg-[#F4F4F4] rounded-2xl w-[512px] h-[30px]">
            <input
              type="text"
              className="flex-1 h-full px-2 text-sm bg-transparent border-none outline-none"
            />
            <ReactSVG src={Search} width={20} height={20} />
          </div>
        </div>
        <div className="flex items-center gap-2 px-4">
          <ReactSVG src={Plus} width={20} height={20} />
          <ReactSVG src={AlertCircle} width={20} height={20} />
          <ReactSVG src={Bell} width={20} height={20} />

          <div className="h-[30px] w-[30px] ">
            <img
              src={photo1}
              className="object-cover w-full h-full rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
