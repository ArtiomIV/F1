import React, { useState } from "react";

import "../styles/App.css"
import Header from "./Header"
import Section1 from "./Section1"

function App() {
    let [city, setCity] = useState("");
    let [result, setResult] = useState("");
    return(
        <>
            <div className="app__wrapper">
                <Header setCity={setCity} setResult={setResult}/>
                <Section1 city={city} res={result}/>
            </div> 
        </>
    );
}

export default App;