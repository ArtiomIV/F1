import React, { useState } from "react";
import axios from "axios";

import "../styles/Header.css"

function Header({setCity, setResult}) {
    let [city, setNewCity] = useState("");
    const KEY = "1b7010e315a81d8b2b902f0b7d0162a1";
    let today = new Date();
    let dd = String(today.getDate()).padStart(2,'0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = today = mm + '.' + dd + '.' + yyyy;;
    setCity(city)

    const getCityName = () => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${document.getElementsByClassName("header__cityName")[0].value}&limit=1&appid=${KEY}&units=metric`)
        .then(res => {

            if (res.data[0]) {
                axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${res.data[0].lat}&lon=${res.data[0].lon}&exclude=minutely&appid=${KEY}&units=metric&`)
                .then(res => {

                    setNewCity(document.getElementsByClassName("header__cityName")[0].value);

                })
                .catch((error) => {

                console.log(error)
                alert(error)

                })

            } else {

                setNewCity("Rome")
                alert("Invalid city name")

            }

        })

        .catch((error) => {

            console.log(error);
            alert(error);

        })

    }

    return(
        <div className="header__background">
            <h1 className="header__appName">Weather APP</h1>
            <div className="header__inputBox">
                <input placeholder="Rome" className="header__cityName"></input>
                <button className="header__searchButton" onClick={getCityName}>
                    <img/>
                </button>
            </div>
            <div className="header__data">
                <p>{today}</p>
            </div>
        </div>
    );
}

export default Header