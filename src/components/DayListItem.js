import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

/* format spots text according to spots availability */
const formatSpots = (spots) => {
  if (spots <= 0) {
    return "no spots";
  } else if (spots === 1) {
    return spots + " spot";
  } else {
    return spots + " spots";
  }
};

/* DayListItem Component */
export default function DayListItem(props) {
  /* desctrucure props */
  const { name, spots, selected, setDay} = props;
  
  /* dynamically add classnames to day using classNames */
  let dayClass = classNames('day-list__item', {
    "day-list__item--selected": selected,
    "day-list__item--full": !spots
  });

  const spotsText = formatSpots(spots);
  return (
    /* render day details */
    <li className={dayClass} onClick={setDay}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{spotsText} remaining</h3>
    </li>
  );
}