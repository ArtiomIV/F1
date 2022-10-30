import React, { useState } from "react";

import "../styles/Section1Info.css"

function Section1Info(props) {
    let now = new Date();
    let arr = Array({
        dt:"",
        temp:"",
        clouds:"",
        weather:[{
            description:"",
            main:"",
            id:"",
            icon:"",
        }],
        wind_speed:"",
        humidity:"",
        pressure:""
    },)

    let arrD = Array({temp:{}, dt:"", weather:[{icon:"", description:""}], feels_like:{day:"", night:"", morn:"", eve:""}})

    const toDate = (unixTimeStap) => {
        return new Date(
            unixTimeStap * 1000
        )
    };

    const renderHours = () => {

        if (props.selected[0] == 1 || props.selected[1] == 1) {

            for (let i=0; i<props.hourly.length;i++) {

                if (props.selected[0] == 1 && toDate(props.hourly[i].dt).getDate() <= now.getDate()) {
                    arr[i] = props.hourly[i]

                } else if (props.selected[0] != 1 && toDate(props.hourly[i].dt).getDate() > now.getDate() && toDate(props.hourly[i].dt).getDate() < now.getDate()+2) {
                    
                    if (!arr[0].dt) {
                        arr[0] = props.hourly[i]

                    } else {
                        arr[i] = props.hourly[i]
                    }

                }
            }

            return (
                <>
                <table className="section1Info__wrapper__table">
                        <thead>
                            <tr className="section1Info__wrapper__table__mainRow">
                                <td className="section1Info__wrapper__table__mainRow__hour mainRow">Hour</td>
                                <td className="section1Info__wrapper__table__mainRow__weat mainRow">Weather</td>
                                <td className="section1Info__wrapper__table__mainRow__temp mainRow">Temp</td>
                                <td className="section1Info__wrapper__table__mainRow__uvi mainRow">Uvi</td>
                                <td className="section1Info__wrapper__table__mainRow__wind mainRow">Wind</td>
                                <td className="section1Info__wrapper__table__mainRow__hum mainRow">Humidity</td>
                                <td className="section1Info__wrapper__table__mainRow__press mainRow">Pressure</td>
                            </tr>
                            {arr.map((d, i) => <tr key={i} className="section1Info__wrapper__table__info">
                                <td className="section1Info__wrapper__table__info__hour infoHour">{toDate(d.dt).getHours()}:00</td>
                                <td className="section1Info__wrapper__table__info__weather infoWeather"><img src={`http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`} height="70px" width="70px"></img><p>{d.weather[0].description}</p></td>
                                <td className="section1Info__wrapper__table__info__temp infoTemp">{d.temp}°</td>
                                <td className="section1Info__wrapper__table__info__uvi infoUvi">{d.uvi}</td>
                                <td className="section1Info__wrapper__table__info__wind infoWind">{d.wind_speed} m/sec</td>
                                <td className="section1Info__wrapper__table__info__hum infoHum">{d.humidity} %</td>
                                <td className="section1Info__wrapper__table__info__press infoPress">{d.pressure} hPa</td>
                            </tr>)}
                        </thead>
                    </table>
                </>
            )

        } else {
            arr = []

        }
        
        
    }

    const renderDay = () => {
        if (props.selected[0] != 1 && props.selected[1] != 1) {
            for (let i=0; i<props.selected.length; i++) {
                if (props.selected[i] != 0) {
                    arrD[0] = props.daily[i]
                }
            }

            return(
                <table className="section1Info__wrapper__table">
                    <thead>
                        <tr className="section1Info__wrapper__table__mainRow">
                            <td className="section1Info__wrapper__table__mainRow__meteoCond main"><p>Meteo Condition</p></td>
                            <td className="section1Info__wrapper__table__mainRow__night main">
                                <p>Night</p>
                                <img src={`http://openweathermap.org/img/wn/${arrD[0].weather[0].icon}@2x.png`} height="70px" width="70px"></img>
                                <p>{arrD[0].weather[0].description}</p>
                            </td>
                            <td className="section1Info__wrapper__table__mainRow__morning main">
                                <p>Morning</p>
                                <img src={`http://openweathermap.org/img/wn/${arrD[0].weather[0].icon}@2x.png`} height="70px" width="70px"></img>
                                <p>{arrD[0].weather[0].description}</p>
                            </td>
                            <td className="section1Info__wrapper__table__mainRow__day main">
                                <p>Day</p>
                                <img src={`http://openweathermap.org/img/wn/${arrD[0].weather[0].icon}@2x.png`} height="70px" width="70px"></img>
                                <p>{arrD[0].weather[0].description}</p>
                            </td>
                            <td className="section1Info__wrapper__table__mainRow__evening main">
                                <p>Evening</p>
                                <img src={`http://openweathermap.org/img/wn/${arrD[0].weather[0].icon}@2x.png`} height="70px" width="70px"></img>
                                <p>{arrD[0].weather[0].description}</p>
                            </td>
                        </tr>
                        <tr className="section1Info__wrapper__table__infoWeather">
                            <td className="section1Info__wrapper__table__infoWeather__infoTemp info">
                                <p className="section1Info__wrapper__table__infoWeather__infoTemp__temp first">Temperature</p>
                                <div className="section1Info__wrapper__table__infoWeather__infoTemp__description second">
                                    <p>Feels like</p>
                                    <p>Min</p>
                                    <p>Max</p>
                                </div>
                            </td>
                            <td className="section1Info__wrapper__table__infoWeather__infoNight info">
                                <p className="section1Info__wrapper__table__infoWeather__infoNight__temp first">{Math.floor(arrD[0].temp.night)}°C</p>
                                <div className="section1Info__wrapper__table__infoWeather__infoNight__description second">
                                    <p>{Math.floor(arrD[0].feels_like.night)}°C</p>
                                    <p>{Math.floor(arrD[0].temp.min)}°C</p>
                                    <p>{Math.floor(arrD[0].temp.max)}°C</p>
                                </div>
                            </td>
                            <td className="section1Info__wrapper__table__infoWeather__infoMorn info">
                                <p className="section1Info__wrapper__table__infoWeather__infoMorn__temp first">{Math.floor(arrD[0].temp.morn)}°C</p>
                                <div className="section1Info__wrapper__table__infoWeather__infoMorn__description second">
                                    <p>{Math.floor(arrD[0].feels_like.night)}°C</p>
                                    <p>{Math.floor(arrD[0].temp.min)}°C</p>
                                    <p>{Math.floor(arrD[0].temp.max)}°C</p>
                                </div>
                            </td>
                            <td className="section1Info__wrapper__table__infoWeather__infoDay info">
                                <p className="section1Info__wrapper__table__infoWeather__infoDay__temp first">{Math.floor(arrD[0].temp.day)}°C</p>
                                <div className="section1Info__wrapper__table__infoWeather__infoDay__description second">
                                    <p>{Math.floor(arrD[0].feels_like.night)}°C</p>
                                    <p>{Math.floor(arrD[0].temp.min)}°C</p>
                                    <p>{Math.floor(arrD[0].temp.max)}°C</p>
                                </div>
                            </td>
                            <td className="section1Info__wrapper__table__infoWeather___infoEve info">
                                <p className="section1Info__wrapper__table__infoWeather__infoEve__temp first">{Math.floor(arrD[0].temp.eve)}°C</p>
                                <div className="section1Info__wrapper__table__infoWeather__infoEve__description second">
                                    <p>{Math.floor(arrD[0].feels_like.night)}°C</p>
                                    <p>{Math.floor(arrD[0].temp.min)}°C</p>
                                    <p>{Math.floor(arrD[0].temp.max)}°C</p>
                                </div>
                            </td>
                        </tr>
                        <tr className="section1Info__wrapper__table__infoWeather">
                            <td className="section1Info__wrapper__table__infoWeather__infoHum info">
                                <p className="section1Info__wrapper__table__infoWeather__infoHum__description first">Humiduty</p>
                            </td>
                            <td className="section1Info__wrapper__table__infoWeather__infoHum info">
                                <p className="section1Info__wrapper__table__infoWeather__infoHum__hum first" >{arrD[0].humidity} %</p>
                            </td>
                            <td className="section1Info__wrapper__table__infoWeather__infoHum info">
                                <p className="section1Info__wrapper__table__infoWeather__infoHum__hum first" >{arrD[0].humidity} %</p>
                            </td>
                            <td className="section1Info__wrapper__table__infoWeather__infoHum info">
                                <p className="section1Info__wrapper__table__infoWeather__infoHum__hum first" >{arrD[0].humidity} %</p>
                            </td>
                            <td className="section1Info__wrapper__table__infoWeather__infoHum info">
                                <p className="section1Info__wrapper__table__infoWeather__infoHum__hum first" >{arrD[0].humidity} %</p>
                            </td>
                        </tr>
                        <tr className="section1Info__wrapper__table__infoWeather">
                            <td className="section1Info__wrapper__table__infoWeather__infoWeend info">
                                <p className="section1Info__wrapper__table__infoWeather__infoWeend__description first">Wind speed</p>
                            </td>
                            <td className="section1Info__wrapper__table__infoWeather__infoWeend info">
                                <p className="section1Info__wrapper__table__infoWeather__infoWeend__weendSpeed first" >{arrD[0].wind_speed} m/s</p>
                            </td>
                            <td className="section1Info__wrapper__table__infoWeather__infoWeend info">
                                <p className="section1Info__wrapper__table__infoWeather__infoWeend__weendSpeed first" >{arrD[0].wind_speed} m/s</p>
                            </td>
                            <td className="section1Info__wrapper__table__infoWeather__infoWeend info">
                                <p className="section1Info__wrapper__table__infoWeather__infoWeend__weendSpeed first" >{arrD[0].wind_speed} m/s</p>
                            </td>
                            <td className="section1Info__wrapper__table__infoWeather__infoWeend info">
                                <p className="section1Info__wrapper__table__infoWeather__infoWeend__weendSpeed first" >{arrD[0].wind_speed} m/s</p>
                            </td>
                        </tr>
                    </thead>
                </table>
            )
        } else {
            arrD = []
        }
    }

    return(
        <> 
            <div className="section1Info__separetor"><p>Extend data</p></div>
            <div className="section1Info__wrapper">
                    {renderHours()}
                <div>
                    {renderDay()}
                </div>
            </div>
        </>
    )
}

export default Section1Info