import React from "react";
import ReactDOM from "react-dom";
import "./createBars.css";


export default function Bars() {

    var styles = {};

    var index1 = [];//genrating height value for each bar "40px"

    for (var i = 0; i < 90; i++) {
        index1[i] = Math.round(Math.random() * 100);
    }

    const indexStr = index1.map((value) => value + "%");

    const arr = Array.from({ length: 90 }, (_, index) => <div className="Bars" key={index} style={{ height: index1[index] + 'px' }}></div>)

    return <div className="outerBox">
        {arr}
    </div>
}