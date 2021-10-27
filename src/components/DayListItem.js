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
  const { name, spots, selected, setDay} = props;
  
  let dayClass = classNames('day-list__item', {
    "day-list__item--selected": selected,
    "day-list__item--full": !spots
  });

  const spotsText = formatSpots(spots);
  return (
    <li className={dayClass} onClick={setDay}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{spotsText} remaining</h3>
    </li>
  );
}