import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Ex() {

    var arr = [];
    const [display, setDisplay] = useState("");

    for (var i = 0; i < 30; i++) {
        arr[i] = Math.round(Math.random() * 100);
    };

    useEffect(() => {
        for (var i = 0; i < 30; i++) {
        setDisplay(display + arr[i] + ',');
    };

    setDisplay(display.substring(0, display.length - 1));
    console.log(display);

    },[arr])

    


    var k = 0, count = 0;
    const handleStart = () => {
        console.log("sorting")
        for (var i = 0; i < 30; i++) {
            count = 0;
            for (var j = 0; j < 30; j++) {
                k = j + 1;
                if (arr[j] > arr[k]) {
                    var temp = arr[j];
                    arr[j] = arr[k];
                    arr[k] = temp;
                }
                else {
                    count++;
                }
            }

            setTimeout(() => {console.log(arr)},200*i);
            if (count == 30) {
                console.log(arr);
                return;
            }
        }

    }

    return <>
        <h2>{display}</h2>
        <button onClick={handleStart}>Sort</button>

    </>
}