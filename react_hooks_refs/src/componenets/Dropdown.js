import React, { useState } from "react";

const Dropdown = ({ option, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const renderedOptions = option.map((option) => {
    //Remove the current value from the dropdown list...
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.lable}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="lable">select a color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open && "visible active"}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.lable}</div>
          <div className={`menu ${open && "visible transition"}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
