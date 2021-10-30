export function getAppointmentsForDay(state, day) {

  const appointments = [];
  for (const currDay of state.days) {
    if (currDay.name === day) {
      for (const appointment of currDay.appointments) {
        appointments.push(state.appointments[appointment]);
      }
    }
  }

  //... returns an array of appointments for that day
  return appointments;
};

export function getInterviewersForDay(state, day) {
  const interviewers = [];
  for (const currDay of state.days) {
    if (currDay.name === day) {
      for (const interviewer of currDay.interviewers) {
        interviewers.push(state.interviewers[interviewer]);
      }
    }
  }

  //... returns an array of interviewers for that day
  return interviewers;
};

export function getInterview(state, interview) {
  let parsedInterview = null;

  if (interview) {
    parsedInterview = {};
    parsedInterview.student = interview.student;
    parsedInterview.interviewer = state.interviewers[interview.interviewer];
  }

  return parsedInterview;
};