import React from "react";
import Card from "./Card";
import { itemData } from "../assets/projectsData";

function Cards() {
  return (
    <div>
      {itemData.map((projectData) => (
        <Card key={projectData.id} projectData={projectData} />
      ))}
    </div>
  );
}

export default Cards;
