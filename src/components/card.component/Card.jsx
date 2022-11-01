import React from "react";
import "./card.css";

const Card = (prop) => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${prop.monsterName.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h1>{prop.monsterName.name}</h1>
      <h4>{prop.monsterName.email}</h4>
    </div>
  );
};

export default Card;
