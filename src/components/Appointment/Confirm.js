import React from "react";
/* component imports */
import Button from '../Button';

/* Confirm Component */
export default function Confirm(props) {
  return(
    <main className="appointment__card appointment__card--confirm">
      {/* display appropriate confirm message passed to props */}
      <h1 className="text--semi-bold">{props.message}</h1>
      <section className="appointment__actions">
        {/* buttons to cancel or confirm deletion act */}
        <Button danger onClick={props.onCancel}>Cancel</Button>
        <Button danger onClick={props.onConfirm}>Confirm</Button>
      </section>
    </main>
  );
};