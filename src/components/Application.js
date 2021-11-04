import React from "react";
import "components/Application.scss";

/* Components and Helpers imports */
import useApplicationData from "../hooks/useApplicationData";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import { getInterview, getAppointmentsForDay, getInterviewersForDay } from "../helpers/selectors";

/* Application Component */
export default function Application(props) {

  /* get state, and modifier methods from custom hook */
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  /* store interviewers for current day */
  const interviewers = getInterviewersForDay(state, state.day);

  /* store appointments for current day */
  const appointments = getAppointmentsForDay(state, state.day).map(
    appointment => {
      return (
        <Appointment
          key={appointment.id}
          {...appointment}
          interview={getInterview(state, appointment.interview)}
          interviewers={interviewers}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview}
        />
      );
    }
  );

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        { appointments }
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
