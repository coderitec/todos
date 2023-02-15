import React from "react";

function FilterButton({name, status}) {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed={status}>
      <span className="visually-hidden">Show </span>
      <span>{name} </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
