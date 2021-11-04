import React from "react";

/* Empty Component */
export default function Empty(props) {
  return (
    <main className="appointment__add">
      {/* icon to add new interview */}
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        /* pass onAdd from props to on click method */
        onClick={props.onAdd}
      />
    </main>
  );
};