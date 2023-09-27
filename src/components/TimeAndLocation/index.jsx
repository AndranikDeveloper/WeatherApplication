import React, { useContext } from "react";
import "./style.css";
import { QueryContext } from "../../App";

const TimeAndLocation = () => {
  const { query } = useContext(QueryContext);
  return (
    <div>
      <div className="location">
        <p className="place">{query}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
