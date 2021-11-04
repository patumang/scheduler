import React from "react";

/* Header Component */
export default function Header(props) {

  return(
    <header className="appointment__time">
      {/* display time passed by props */}
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
};