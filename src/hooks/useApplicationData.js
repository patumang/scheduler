import { useEffect, useState } from 'react';
import axios from 'axios';

/* useApplicationData hook */
const useApplicationData = () => {

  /* set state with object of day, days,appointments, interviewers */
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {

    /* call scheduler-api to get data for days, appointments, interviewers */
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      /* update state with api data */
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);

  /* function to set current day */
  const setDay = day => setState(prev => ({ ...prev, day }));

  /* function to save and update an interview */
  function bookInterview(id, interview) {
    /* store new interview detail in appointment */
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    /* store new appointment in appointments */
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    /* make api call to store new/updated interview details  */
    return axios.put(`/api/appointments/${id}`, { interview })
      .then(res => {
        /* decrement and store updated spots value for new interview for that day */
        if(state.appointments[id].interview === null){
          const days = state.days.map(day => (
            day.appointments.includes(id)
              ? { ...day, spots: day.spots - 1 }
              : day
          ));
          /* store new values in state */
          setState(prev => ({ ...prev, days, appointments }));
        } else {
          /* store updated values in state for updated interview */
          setState(prev => ({ ...prev, appointments }));
        }
      });
  }

  /* function to delete an interview */
  function cancelInterview(id) {
    /* store null to deleted interview in appointment */
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    /* update deleted appointment details in appointments */
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    /* make api call to store deleted interview details  */
    return axios.delete(`/api/appointments/${id}`)
      .then(res => {
        /* increment and store updated spots value for deleted interview for that day */
        const days = state.days.map(day => (
          day.appointments.includes(id)
            ? { ...day, spots: day.spots + 1 }
            : day
        ));
        /* set state with modified days and appointments details */
        setState(prev => ({ ...prev, days, appointments }));
      });
  }

  /* return state and helper methods */
  return { state, setDay, bookInterview, cancelInterview }
}
export default useApplicationData;