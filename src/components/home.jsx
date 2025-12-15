import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./home.css";
import Ex from "./example.jsx";

export default function Home() {

    const [genComp, setGencomp] = useState([]);//array jisme divs ban rhe hai

    const [step, setStep] = useState([]);

    const [status, setStatus] = useState(0);

    const [heights, setHeights] = useState([]);

    const [changes, setChanges] = useState([]);

    const [display, setDisplay] = useState(91);

    const counter = useRef(0);

    const handleQuick = () => {
    }

    const handleMerge = () => {
    }

    const handleIns = () => {
    }

    const handleSel = () => {
    }

    useEffect(() => {
        for (var i = 0; i < 90; i++) {
            heights[i] = Math.round(Math.random() * 100);
        }
        setHeights(heights);
        setGencomp(heights);
        changes.push([genComp]);
        setChanges(changes);
    }, [])

    const handleBubble = () => {

        var count = 0, k = 0;

        for (var i = 0; i < 90; i++) {
            count = 0;

            for (var j = 0; j < genComp.length; j++) {
                k = j + 1;

                if (heights[j] > heights[k]) {

                    var temp = heights[j]
                    heights[j] = heights[k];
                    heights[k] = temp;
                    console.log(heights);
                    setHeights(heights);

                    changes.push(heights);
                    console.log(changes);
                    setChanges(changes);
                }

                else {
                    count++;
                }

            }

            if (count == genComp.length) {
                setStatus(1);
                setDisplay(0);
                console.log("Sorting completed!")
                return;
            }
        }
    }

    if (status == 1) {
        console.log("Visuals called");
        visuals();
    }

    function visuals() {

        counter.current = counter.current + 1;

        setTimeout(() => {

            setStep(changes[display]);

            console.log("state updated");

            if (display < 90) {
                setStatus(0);
            }
            else {
                setDisplay(display + 1);
            }

        }, counter.current * 200);

    }

    return <>
        <h1>This is a Sorting Visualuser</h1>
        <div>
            <div className="outerWall">
                {status == 1 ? step.map((val, index) => <div className="Bars" key={index} style={{ height: val + '%' }} ></div>)
                    : genComp.map((val, index) => <div className="Bars" key={index} style={{ height: val + '%' }} ></div>)}
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