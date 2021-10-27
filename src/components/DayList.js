import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, value, onChange } = props;
  return (
    <ul>
      {
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