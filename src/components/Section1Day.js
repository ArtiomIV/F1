import React, {useState} from "react";

import "../styles/Section1Day.css"


function Section1Day(props) {

    const toDate = (unixTimeStap) => {
        return new Date(
            unixTimeStap * 1000
        )
    };

    let monthName = toDate(props.dt).toLocaleDateString('default', {month:'long'});
    let monthDay = toDate(props.dt).getDate();

    return(
        <>
            <div id={props.id} className={props.selected ? "day__wrapper_s" : "day__wrapper_ns"}>
                <div className="day__weekDay">{monthDay} {monthName.slice(0, 3)}</div>
                <div className="day__imgWrapper"><img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} height="70px" width="70px"></img></div>
                <div className={props.selected ? "day__temp_s" : "day__temp_ns"}>{Math.floor(props.temp.min)}°- {Math.floor(props.temp.max)}°</div>
            </div>
        </>
    )
}

export default Section1Day