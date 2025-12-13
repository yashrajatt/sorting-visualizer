import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./home.css";
import Ex from "./example.jsx";

export default function Home() {

    const [arr, setArr] = useState([]);//array jisme divs ban rhe hai

    const [arr2, setArr2] = useState([]);

    const [change, setChange] = useState([]);
    
    let heights = [];
    
    useEffect(() => {
        for (var i = 0; i < 90; i++) {
            heights[i] = Math.round(Math.random() * 100);
        }
        setArr(heights);
        setArr(arr.map((val, index) => <div className="Bars" key={index} style={{ height: val + '%' }} ></div>));
        setChange([arr]);
        setArr2(arr);
    }, [])

    function sorting() {

        setArr2(change.map((val, index) => val))

    }

    const handleQuick = () => {
    }

    const handleMerge = () => {
    }

    const handleBubble = () => {
        console.log("sorting");
        setChange([arr]);
        var count = 0, k = 0;
        for (var i = 0; i < 90; i++) {
            count = 0;

            for (var j = 0; j < arr.length; j++) {
                k = j + 1;

                if (heights[j] > heights[k]) {

                    var temp = heights[j]
                    heights[j] = heights[k];
                    heights[k] = temp;

                    arr[j] = <div className="Bars" key={j} style={{ height: heights[j] + '%' }} ></div>;
                    arr[k] = <div className="Bars" key={k} style={{ height: heights[k] + '%' }} ></div>;
                    setArr(arr);

                    setChange(...change, [arr]);
                }

                else {
                    count++;
                }

            }

            if (count == arr.length) {
                sorting();
                return;
            }
        }

    }

    const handleIns = () => {
    }

    const handleSel = () => {
    }




    return <>
        <h1>This is a Sorting Visualuser</h1>
        <div>
            <div className="outerWall">
                {arr}
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