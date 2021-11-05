import React from "react";
import classNames from "classnames";

import "components/Button.scss";

/* Button Component */
export default function Button(props) {
   /* add classes to button dynamically using classnames */
   let buttonClass = classNames('button', { 
      "button--confirm": props.confirm,
      "button--danger": props.danger
   });

   return (
      /* Show button with appropriate props values */
      <button
         className={buttonClass}
         onClick={props.onClick}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   );
}
