import React from "react";
import ExpandedCard from "../Card";
import SimpleCard from "../SimpleCard";
import "./GridView.css";
const Index = ({ data, isRow, isExpanded, handleClickSimpleCard }) => {
  console.log("data-weekly", data);
  return (
    <div className="grid-container">
      <div
        style={{
          gridAutoFlow: isRow ? "column" : "row",
          gridColumnGap: isExpanded ? "4px" : "5px",
        }}
        className="grid-content"
      >
        {data &&
          data.map((obj, index) =>
            isExpanded ? (
              <ExpandedCard key={index} obj={obj} />
            ) : (
              <SimpleCard
                key={index}
                obj={obj}
                handleClickCard={handleClickSimpleCard}
              />
            )
          )}
      </div>
    </div>
  );
};
export default Index;
