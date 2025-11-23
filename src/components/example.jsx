// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";

// export default function Ex() {

//     const [arr, setArr] = useState([]);
//     var display = "";

//     for (var i = 0; i < 30; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     };

//     for (var i = 0; i < 30; i++) {
//         display = display + arr[i] + ',';
//     };

//     display = display.substring(0, display.length - 1);
//     console.log(display);

//     console.log(arr)

//     setArr(...arr, arr[2] = 100, ...arr);
//     console.log(arr)


//     const handleStart = () => {
//         for (var i = 0; i < 30; i++) {
//             var firstValue = arr[i];

//         }
//         console.log(firstValue);
//     }

//     return <>
//         <h2>{display}</h2>
//         <button onClick={handleStart}>Sort</button>

//     </>
// }