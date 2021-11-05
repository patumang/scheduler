/* function to return appointments for given day */
export function getAppointmentsForDay(state, day) {

  const appointments = [];
  /* loop through days */
  for (const currDay of state.days) {
    /* if current day name is equal to given day */
    if (currDay.name === day) {
      /* store appointment details of current day */
      for (const appointment of currDay.appointments) {
        appointments.push(state.appointments[appointment]);
      }
    }
  }

  //... returns an array of appointments for that day
  return appointments;
};

/* function to return interviewers for current day */
export function getInterviewersForDay(state, day) {
  const interviewers = [];
  /* loop through days */
  for (const currDay of state.days) {
    /* if current day name is equal to given day */
    if (currDay.name === day) {
      /* store interviewer details of current day */
      for (const interviewer of currDay.interviewers) {
        interviewers.push(state.interviewers[interviewer]);
      }
    }
  }

  //... returns an array of interviewers for that day
  return interviewers;
};

/* function to return interview details */
export function getInterview(state, interview) {
  let parsedInterview = null;

  /* if interview exist fetch interview deatils otherwise return null */
  if (interview) {
    parsedInterview = {};
    parsedInterview.student = interview.student;
    parsedInterview.interviewer = state.interviewers[interview.interviewer];
  }

  return parsedInterview;
};