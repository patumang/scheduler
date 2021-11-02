import React from "react";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "../../hooks/useVisualMode";

import "./styles.scss";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW));
  }
  function deleteConfirm() {
    transition(CONFIRM);
  }

  function deleteInterview() {
    transition(DELETING);
    props.cancelInterview(props.id)
      .then(() => transition(EMPTY));
  }

  return (
    <article className="appointment">
      {props.time ? <Header time={props.time} /> : <p>No Appointments</p>}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={props.onEdit}
          onDelete={deleteConfirm}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()} />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === CONFIRM && (
        <Confirm 
          message="Delete the appointment?"
          onConfirm={deleteInterview} 
          onCancel={() => back()}
        />)}
      {mode === DELETING && <Status message="Deleting" />}
    </article>
  );
};