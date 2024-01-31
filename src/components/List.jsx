import React from "react";
import { ReactSVG } from "react-svg";
import { DotDot } from "../assets/IconsManager";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";
import AddCard from "./AddCard";
export default function List({ list, cards }) {
  return (
    <div className="my-[10px] w-[288px] bottom-0  sm:w-[322px] lg:w-[342px] xl:w-[362px] overflow-x-auto flex-shrink-0">
      <div className="rounded-xl py-[10px] bg-[#F4F4F4] list_title p-4 flex items-center justify-between">
        <h1 className="text-lg ">{list.title}</h1>
        <ReactSVG src={DotDot} /> 
      </div>
      <Droppable droppableId={list.id}>
        {(provided) => (
          <div 
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex flex-col my-[10px] h-[67vh]  gap-[10px] scrollbar-hide overflow-y-auto  min-h-24">
            {cards.map((card, index) => (
              <Card key={card.id} card={card} index={index}  />
            ))}
             {provided.placeholder}
             <AddCard/>
          </div>
         
        )}
      </Droppable>
    </div>
  );
}
