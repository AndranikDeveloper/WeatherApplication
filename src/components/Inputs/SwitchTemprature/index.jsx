import React, { useContext } from "react";
import "./style.css";
import { QueryContext } from "../../../App";

const SwitchTemprature = () => {
  const { setUnits, units, setQuery } = useContext(QueryContext);

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  return (
    <div className="temprature">
      <button
        onClick={handleUnitsChange}
        name="metric"
        className={units === "metric" ? "temp-icons active" : "temp-icons"}
      >
        °C
      </button>
      <p className="stick">|</p>
      <button
        onClick={handleUnitsChange}
        name="imperial"
        className={units === "imperial" ? "temp-icons active" : "temp-icons"}
      >
        °F
      </button>
    </div>
  );
};

export default SwitchTemprature;
