import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, day, setDay } = props;
  /* const parsedDayList = days.map((d) => {
    return (
      <DayListItem 
        key={d.id} 
        name={d.name}
        spots={d.spots}
        selected= {d.name === day}
        onClick={() => setDay(d.name)} 
      />
    );
  }); */
  console.log(setDay);
  return (
    <ul>
      {/* {parsedDayList} */}
      {
        days.map((d) => (
            <DayListItem
              key={d.id}
              name={d.name}
              spots={d.spots}
              selected={d.name === day}
              setDay={setDay}
            />
        ))
      }
    </ul>
  );
}