import React from "react";
import DayListItem from "./DayListItem";

/* DayList Component */
export default function DayList(props) {
  const { days, value, onChange } = props;
  return (
    <ul>
      {
        /* map through days to render each DayListItem */
        days.map((currDay) => (
          <DayListItem
            key={currDay.id}
            name={currDay.name}
            spots={currDay.spots}
            selected={currDay.name === value}
            setDay={() => onChange(currDay.name)}
          />
        ))
      }
    </ul>
  );
}