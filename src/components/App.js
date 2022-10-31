import React, { useState } from "react";

import "../styles/App.css"
import Header from "./Header"
import Section1 from "./Section1"

function App() {
    let [city, setCity] = useState("");
    return(
        <>
            <div className="app__wrapper">
                <Header setCity={setCity}/>
                <Section1 city={city}/>
            </div> 
        </>
    );
}

export default App;