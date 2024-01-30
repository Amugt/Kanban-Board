import React from "react";
import { ReactSVG } from "react-svg";
import { Hard, Heart, Public } from "../assets/IconsManager";
import Team from "./Team";
import List from "./List";
import { teamData } from "../assets/data";
import { Lists } from "../assets/data";
import { cardsData } from "../assets/data";
export default function Board() {
  return (
    <div className="px-[16px] pt-16 sm:pt-20 ">
      <div className="flex justify-between project_info">
        <div className="gap-5 sm:flex">
          <h1 className="text-2xl project_name">Brackets</h1>
          <div className="flex items-center gap-2">
            <ReactSVG src={Heart}  />
            <ReactSVG src={Public} />
            <ReactSVG src={Hard} />
          </div>
        </div>
      
          
          <div className="flex items-end gap-2 justify-self-end">
            <Team teamData={teamData}/>
            <h1 className="text-xl text-black"> Menu</h1>
          </div>
        
      </div>
      <div className="flex flex-row gap-4 overflow-x-auto flex-nowrap">
      {Lists.map((list) => (
    <List key={list.id} list={list} cards={cardsData.filter((card) => card.listId === list.id)} />
  ))}
      </div>
    </div>
  );
}
