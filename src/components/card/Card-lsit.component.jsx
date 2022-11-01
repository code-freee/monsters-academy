import React from "react";
import "./cardList.css";
import Card from "../card.component/Card";

const CardList = (prop) => {
  return (
    <div className="cardList">
      {prop.monsters.map((monster) => {
        return <Card key={monster.id} monsterName={monster} />;
      })}
    </div>
  );
};

export default CardList;
