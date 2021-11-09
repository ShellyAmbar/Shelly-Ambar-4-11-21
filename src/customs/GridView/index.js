import React from "react";
import Card from "../Card";
import "./GridView.css";
const Index = ({ data, isRow }) => {
  console.log("data-weekly", data);
  return (
    <div className="grid-container">
      <div
        style={{ gridAutoFlow: isRow ? "column" : "row" }}
        className="grid-content"
      >
        {data && data.map((obj, index) => <Card obj={obj} />)}
      </div>
    </div>
  );
};
export default Index;
