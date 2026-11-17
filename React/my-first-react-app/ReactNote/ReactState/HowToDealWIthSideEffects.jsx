// How to Deal with Side Effects

// Certain components in react need to interact with things outside themselves.
// It can be anything from querying date from a server to finding/changing the position of the component on the webpage
// or even sending some date to a server

// Using effects

// THE useEffect hook!!

import { useEffect, useState} from "react";

export default function Clock () {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const key = setInterval(() => {
            setCounter(count => count + 1);
        }, 1000)

        return () => {
            clearInterval(key);
        };
    }, []);

    
    

    return (
        <div>
            <p>{counter} seconds have passed</p>
        </div>
    );
}

// The code is broken the time interval goes berserk because the setInterval function is being called not once
// but at every state render

// This is where the useEffect save us. 

// The dependency array
// By default, useEffect hook runs on every render. Since setting state tears the component down,
// we still get multiple setter calls on every render, which doesn't help us

// the second argument accepts an array of dependencies allowing the hook to re-render only when
// when those dependencies are change.
// So if you have a state variable and want to have some side-effect occur any time the state changes, 
// you can use this hook and mention the state variable in the dependency array.

// THE CLEAN UP FUNCTION 

// MANAGING useEffects dependencies
// useEffect(() => {
//     // This runs after every render
// })

// useEffect(() => {
//     // This runs only on mount (When the components appears)
// },[])

// useEffect(() => {
//     // This runs on mount and also if either a or b have changed since the last render  
// }, [a, b])


// CASES WHEN YOU DON'T NEED TO USE useEffect
// - You do not need useEffect when you are only calculating based on the state during render.
// - You do not need effects for events. Code that runs when component is displayed should be in effects.

// LIFECYCLE OF REACT EFFECTS.
// - Effects have a different lifecycle from component. Component may mount, update, or unmount.
// - An effect only do two things: to start synchronizing something, and later stop synchronizing.

// THE LIFECYCLE OF AN EFFECT.
// - Every react component goes through the same lifecycle
//  - A component mounts when it's added to the screen
//  - A component updates when it receives new props or state, usually in response to an interaction
//  - A component unmounts when it's remove from the screen. 

//  WHY synchronizing may need to happen more than once.

// Example

// function ChatRoom({roomId}) {

//     useEffect(() => {
//         const connection = createConnection(serverUrl, roomId);
//         connection.connect();
        
//         return () => {
//             connection.disconnect(); // Clean up function
//         }
//     },[roomId]);
//     return (
//         <div>
//             <h1>Welcome to the {roomId} room</h1>
//     </div>);
// }

// You want  React to do things:
// - Stop synchronizing.
// - Start synchronizing.

// how React re-synchronizes your effects
// - You need to stop synchronizing, React will call the cleanup function.
// - Always focus on a single start/stop cycle at a time. it shouldn't matter when a component is mounting
//   updating, or unmounting. All you need to do is describe how to start synchronizing and how to stop.    

// ALL VARIABLE DECLARED IN THE COMPONENT BODY ARE REACTIVE
// 