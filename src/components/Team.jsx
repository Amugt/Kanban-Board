import React from 'react';

const Team = ({teamData= []}) => {
  const maxVisibleMembers = 5;

  const visibleMembers = teamData.slice(0, maxVisibleMembers);
  const remainingMembers = teamData.slice(maxVisibleMembers);

  return (
    <div className="flex flex-row items-center flex-nowrap">
      {visibleMembers.map((member) => (
        <div key={member.id} className="-ml-4 bg-white rounded-full mx">
          <img
            src={member.avatar}
            alt={member.name}
            className="object-cover rounded-full object-center h-[30px] w-[30px]"
          />
        </div>
      ))}

      {teamData.length > maxVisibleMembers && (
        <div className="bg-black -ml-4 text-white rounded-full  flex items-center justify-center h-[30px] w-[30px]">
          +{remainingMembers.length}
        </div>
      )}
     {(teamData.length < maxVisibleMembers || teamData.length === 0) && (
  <div className="bg-black -ml-4 text-white rounded-full  flex items-center justify-center h-[30px] w-[30px]">
    +
  </div>
)}


    </div>
  );
};

export default Team;
