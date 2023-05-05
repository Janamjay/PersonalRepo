import React, { useState } from "react";
import con from "./convertor.module.css";

const Convertor = () => {
  const [pxValue, setPxValue] = useState("");
  const [remValue, setRemValue] = useState("");

  const handleInputChange = (event) => {
    setPxValue(event.target.value);
    setRemValue(event.target.value / 16); // Assuming a 16px base font size
  };
  return (
    <div className={con.container}>
      <h1>Pixel to REM Converter</h1>
      <div className={con.form_group}>
        <label>Pixel Value</label>
        <input
          type="number"
          id="pxValue"
          name="pxValue"
          value={pxValue}
          onChange={handleInputChange}
        />
      </div>
      <div className={con.form_group}>
        <label>REM Value</label>
        <input
          type="number"
          id="remValue"
          name="remValue"
          className={con.value}
          value={remValue}
          readOnly
        />
      </div>
    </div>
  );
};

export default Convertor;
