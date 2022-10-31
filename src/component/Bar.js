import React from "react";

function Bar(props) {

 let dayOfWeek;


  

  switch (new Date().getDay()) {
    case 1:
      dayOfWeek = "mon";
      break;
    case 2:
        dayOfWeek = "tue";
      break;
    case 3:
        dayOfWeek = "wed";
      break;
    case 4:
        dayOfWeek = "thu";
      break;
    case 5:
        dayOfWeek = "fri";
      break;
    case 6:
        dayOfWeek = "sat";
      break;
    case 0:
        dayOfWeek = "sun";
      break;
    default:
        dayOfWeek = "mon";
      break;
  }

  return (
    <div className="day">
      <span className="price-box">${props.amount}</span>
      <span
        className="bar-bar"
        style={{ height: props.amount, backgroundColor: dayOfWeek === props.day ? "pink":  "rgb(239, 46, 46)" }}
      ></span>
      <span className="">{props.day}</span>
    </div>
  );
}

export default Bar;
