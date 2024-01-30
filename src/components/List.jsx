import React from "react";
import { ReactSVG } from "react-svg";
import { DotDot } from "../assets/IconsManager";
import Card from "./Card";

export default function List({ list, cards }) {
  return (
    <div className="my-[10px] w-full sm:w-[320px] overflow-x-auto flex-shrink-0">
      <div className="rounded-xl py-[10px] bg-[#F4F4F4] list_title p-4 flex items-center justify-between">
        <h1 className="text-lg ">{list.title}</h1>
        <ReactSVG src={DotDot} />
      </div>
      <div className="flex flex-col my-[10px] gap-[10px] ">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
