import React from "react";

function ProjectCard() {
  return (
    <div className="flex-grow-1 bg-gray-200 relative rounded-2xl flex items-center">
      <img
        className="w-full p-2"
        src="../public/Screenshot 2024-01-22 at 10.45.11 PM.png"
        alt=""
      />

      <div className="bg-gray-50 absolute h-full w-full opacity-0 hover:opacity-100">

      </div>
    </div>
  );
}

export default ProjectCard;
