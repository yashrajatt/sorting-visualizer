import React from "react";
import ReactDOM from "react-dom";
import "./createBars.css";

var heights = [];//genrating height value for each bar "40px"

for (var i = 0; i < 90; i++) {
    heights[i] = Math.round(Math.random() * 100);
}

const arr = Array.from({ length: 90 }, (_, index) => <div className="Bars" key={index} style={{ height: heights[index] + 'px' }}></div>)

export default function Bars() {

    return <div className="outerBox">
        {arr}
    </div>
}

export var heights;
