import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

const formatSpots = (spots) => {
  if (spots <= 0) {
    return "no spots";
  } else if (spots === 1) {
    return spots + " spot";
  } else {
    return spots + " spots";
  }
};

export default function DayListItem(props) {
  let dayClass = classNames('day-list__item', {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  });

  const spotsText = formatSpots(props.spots);
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spotsText} remaining</h3>
    </li>
  );
}