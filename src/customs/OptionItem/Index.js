import React from "react";
import "./OptionItem.css";

const Index = ({ object, onClickOption }) => {
  return (
    <div className="item-container" onClick={() => onClickOption(object)}>
      <h1> {object.LocalizedName}</h1>
    </div>
  );
};

export default Index;
