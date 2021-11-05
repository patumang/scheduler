import React from "react";
import PropTypes from 'prop-types';
import InterviewerListItem from "./InterviewerListItem";

import "components/InterviewerList.scss";

/* InterviewerList Component */
function InterviewerList(props) {
  /* destructure props object */
  const { interviewers, value, onChange } = props;
  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {
          /* map through interviewers to render each InterviewerListItem */
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

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;