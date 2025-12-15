import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Ex() {

    var styles = {
        backgroundColor: 'red',
        height: '200px',
        width: '90%'
    };

    var styles2 = {
        backgroundColor: 'black',
        height: '200px',
        width: '90%'
    }

   var change = false

    const handelColorChange = () => {
        change = !change;
    }

    return <>
        <div id="color2" style={{ padding: '10px', height: '300px', width: '50%', display: 'flex', alignContent: 'center' }}>
            <div id="color" style={change ? styles : styles2} ></div>
        </div>
        <button id="start" onClick={handelColorChange} >Change color</button>
    </>;
}