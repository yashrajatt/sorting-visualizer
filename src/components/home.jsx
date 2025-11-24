import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Ex from "./example.jsx";
import Bars from "./createBars.jsx";

export default function Home() {

    const [input, setInput] = useState("0");

    const styles = {
        outerWall: {
            height: '120px',
            display: 'flex',
            borderTop: '10px',
            gap: 1
        },
        bars: {
            width: '10px',
            height: '50px',
            marginTop: '10px',
            backgroundColor: 'blue',
            border: '1px',
            borderColor: 'black'
        }
    };

    const handleQuick = () => {
    }

    const handleMerge = () => {
    }

    const handleBubble = () => {

    }

    const handleIns = () => {
    }

    const handleSel = () => {
    }

    return <>
        <h1>This is a Sorting Visualuser</h1>
        <div>
            <div style={styles.outerWall}>
                <Bars />
            </div>
        </div>
        <div>
            <button id="quick" onClick={handleQuick}>Quick Sort</button>
            <button id="merge" onClick={handleMerge}>Merge Sort</button>
            <button id="bubble" onClick={handleBubble}>Bubble Sort</button>
            <button id="insertion" onClick={handleIns}>Insertion Sort</button>
            <button id="selection" onClick={handleSel}>Selection Sort</button>
        </div>
        <div>
            <Ex />
        </div>
    </>
}