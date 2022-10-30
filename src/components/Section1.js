import React, { useState } from "react";
import axios from "axios";

import "../styles/Section1.css";
import Section1Day from "./Section1Day";
import Section1Info from "./Section1Info";

let lastCity = ""

function Section1({city, res}) {
    //static variables
    const week = [0, 1, 2, 3, 4, 5, 6];
    const KEY = "1b7010e315a81d8b2b902f0b7d0162a1";

    //hand fucntions
    const handleClick = event => {
        let array = [];
        week.map(d => array.push(0));
        array[event.currentTarget.id] = 1;
        changeSelecetion(array)
    }

    //state variables
    let [selection, changeSelecetion] = useState([1]);
    let [cityCoord, setCoord] = useState({
        name:"", 
        lat: "", 
        lon: "",
        });
    let cityName = { city }.city;
    let [result, setResult] = useState({
        current: {},
        daily: Array(7).fill({temp:{}, dt:"", weather:[{icon:""}]}),
        hourly: Array(48).fill({
            dt:"",
            temp:"",
            clouds:"",
            weather:[{
                description:"",
                main:"",
                id:""
            }],
        },),
    })
    
    //calls
    if (cityName && lastCity != cityName) {

        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${KEY}&units=metric`)
        .then(res => {

            setCoord(res.data[0])

                axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${res.data[0].lat}&lon=${res.data[0].lon}&exclude=minutely&appid=${KEY}&units=metric`)
                .then(res => {

                    setResult(res.data)

                })
                .catch((error) => {

                    console.log(error)
                    alert(error)

            })

        })
        .catch((error) => {

            console.log(error);
            alert(error);

        })

        lastCity = cityName;

    }

    else if (cityName == false && lastCity != "Rome") {

        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=Rome&limit=1&appid=${KEY}&units=metric`)
        .then(res => {

            setCoord(res.data[0])

            axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${res.data[0].lat}&lon=${res.data[0].lon}&exclude=minutely&appid=${KEY}&units=metric&`)
            .then(res => {

                setResult(res.data)

            })

            .catch((error) => {

                console.log(error)
                alert(error)

            })
        })
        .catch(error => {

            console.log(error)
            alert(error)

        })

        lastCity = "Rome";

    }

    return(
        <>  
            <div className="section1__cityName"><p>Forcast for {cityCoord.name}</p></div>
                <div className="section1__week">
                {
                    week.map(d => <div onClick={handleClick} id={d} key={d} className="section1__daywrapper">
                    <Section1Day selected={selection[d]} temp={result.daily[d].temp} dt={result.daily[d].dt} icon={result.daily[d].weather[0].icon} /></div>)
                }
            </div>
            <div className="section1__dayInfo">
                <Section1Info selected={selection} hourly={result.hourly} daily={result.daily} />
            </div>
        </>
    );
}

export default Section1