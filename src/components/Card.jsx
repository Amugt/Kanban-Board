import React from "react";
import Team from "./Team";
import { ReactSVG } from "react-svg";
import { Attach, Heart, Message } from "../assets/IconsManager";
import { Draggable } from "react-beautiful-dnd";
export default function Card({ card ,index}) {
  // check if 'card.status' is an array; if true, use it; if false, fallback to an empty array
  const statusColors = Array.isArray(card.status) ? card.status : [];

  return (
    <Draggable draggableId={card.id} index={index}>
   {provided=>(
    
    <div className="rounded-xl  bg-[#F4F4F4]  p-4 "
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
       >
      {card.image && (
        <img
          src={card.image}
          alt=""
          className="object-cover mb-4 object-center h-[170px] w-full rounded-lg "
        />
      )}

      <div className="flex gap-2 mb-2 flex-nowrap">
        
      {statusColors.map((color, index) => (
        
          <div key={index} style={{ height: '5px', width: '56px', borderRadius: '6px', backgroundColor: color }} />
        ))}
      </div>

      <h1 className="font-semibold sm:text-lg text-md">{card.title}</h1>
      <p className="text-sm text-gray-500 sm:text-md">{card.description}</p>
      <div className="flex items-center justify-between pt-4 flex-nowrap">
        <div className="ml-4">
          <Team teamData={card.team} />
        </div>
        <div className="flex gap-2 flex-nowrap sm:gap-3">
          <div className="flex items-center gap-1 text-gray-500">
            {card.messages}
            <ReactSVG src={Message} />
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            {card.likes}
            <ReactSVG src={Heart} />
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            {card.attachments}
            <ReactSVG src={Attach} />
          </div>
        </div>
      </div>
   
    </div>
   )}
    </Draggable>
  );
}
