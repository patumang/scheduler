import React from "react";

/* Error Component */
export default function Error(props) {
  return(
    <main className="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        {/* display appropriate message passed by props */}
        <h3 className="text--light">{props.message}</h3>
      </section>
      {/* close icon */}
      <img
        className="appointment__error-close"
        src="images/close.png"
        alt="Close"
        /* on click of close icon pass onClose from props */
        onClick={props.onClose}
      />
    </main>
  );
};