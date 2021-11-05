import React from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss";

/* InterviewerListItem Component */
export default function InterviewerListItem(props) {

  /* destructure props object */
  const {name, avatar, setInterviewer, selected} = props;
  /* dynamically add classnames to interviewer using classNames */
  const interviewerClass = classNames("interviewers__item", {"interviewers__item--selected": selected});

  return(
    /* display interviewer avatar and details */
    <li className={interviewerClass} onClick={setInterviewer}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  );
};