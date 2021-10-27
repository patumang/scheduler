import React from "react";
import InterviewerListItem from "./InterviewerListItem";

import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const { interviewers, value, onChange } = props;
  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {
          interviewers.map((interv) => (
            <InterviewerListItem
              key={interv.id}
              name={interv.name}
              avatar={interv.avatar}
              selected={interv.id === value}
              setInterviewer={() => onChange(interv.id)}
            />
          ))
        }
      </ul>
    </section>
  );
}