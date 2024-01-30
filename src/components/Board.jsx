import React,{ useState,useEffect } from "react";
import { ReactSVG } from "react-svg";
import { Hard, Heart, Globe } from "../assets/IconsManager";
import Team from "./Team";
import List from "./List";

import { initialData } from "../assets/data";
import { teamData } from "../assets/data";
import { DragDropContext } from "react-beautiful-dnd";
export default function Board() {
  
  // to get initial data from local storage or use the default value
  const getInitialData = () => {
    const storedData = localStorage.getItem("boardData");
    return storedData ? JSON.parse(storedData) : initialData;
  };
 
  // Initialize state with data from local storage or default value
  const [state, setState] = useState(getInitialData);

  // Save state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("boardData", JSON.stringify(state));
  }, [state]);

  const listsArray = Object.values(state.lists);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // check if the drag is outside of a droppable area
    if (!destination) {
      return;
    }

    // check if the card is dropped in a different position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // update state based on the drag and drop change
    const updatedState = { ...state };
    const sourceList = updatedState.lists[source.droppableId];
    const destinationList = updatedState.lists[destination.droppableId];
   

    // remove the card from the source list
    sourceList.cardIds.splice(source.index, 1);

    // insert the card into the destination list
    destinationList.cardIds.splice(destination.index, 0, draggableId);

    // update the state
    setState(updatedState);
  };

  
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="px-[16px] pt-16 sm:pt-20 h-screen">
        <div className="flex justify-between sm:items-center  h-[7vh] sm:h-[5vh] project_info ">
          <div className="gap-12 sm:flex">
            <h1 className="text-2xl project_name">Brackets</h1>
            <div className="flex items-center gap-2">
              <ReactSVG src={Heart} />
              <div className="  h-6 border-gray-300 border-l-[1px]"></div>
              <ReactSVG src={Globe} />
              <div className="h-6 border-gray-300 border-l-[1px]"></div>
              <h1 className="text-sm text-gray-300">Public</h1>
              <div className="h-6 border-gray-300 border-l-[1px]"></div>
              <ReactSVG src={Hard} />
            </div>
          </div>

          <div className="flex items-end gap-2 justify-self-end">
            <Team teamData={teamData} />
            <h1 className="text-xl text-black"> Menu</h1>
          </div>
        </div>
        <div className="flex flex-row gap-4 overflow-x-scroll flex-nowrap">
          {listsArray.map((list) => {
            const cards = list.cardIds.map((cardId) => state.cards[cardId]);
            return <List key={list.id} list={list} cards={cards} />;
          })}
        </div>
      </div>
    </DragDropContext>
  );
}
