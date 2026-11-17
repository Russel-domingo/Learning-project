// PASSING DATA BETWEEN COMPONENTS

// Data Transfer in React
//  In React, data is transferred from parent components to child components via props.
//  This data transfer is unidirectional, meaning it flows in only one direction.
//  Any changes made to this data will only affect child components and not parent or sibling components.

// Using props in React
//  

// function Button() {
//     return (
//         <button>Click Me!</button>
//     );
// } 

// function Button2() {
//     return (
//         <button>Don't Click Me!</button>
//     );
// }

// export default function App() {
//     return(
//         <Button></Button>
//         <Button2></Button2>
//         <Button></Button>
//     );
// }

// This may seem like a huge deal right now, but what if we had 10 buttons? each having different text, font, color, size and any other variation.
// Let's see how using props, we can account for any number of variation with single button.


// function Button(props) {
//     const buttonStyle = {
//         color: props.color,
//         fontSize: props.fontSize + 'px'
//     }

//     return (
//         <button style={buttonStyle}>{props.text}</button>
//     );
// }

// export default function App() {
//     return (
//         <div>
//             <Button text="Click Me!" color="blue" fontSize={12}></Button>
//             <Button text="Don't Click Me!" color="red" fontSize={12}></Button>
//             <Button text="Click Me!" color="blue" fontSize={20}></Button>
//         </div>
//     );
// }
// The Button functional component now receives props as a function parameter.
// The individual are then referenced within the component via props.propertyName.

// PROP DESTRUCTURING
//  Unpacking your props in the component parameters allows for more concise and readable code.

// Example

// function Button({text, color, fontSize}) {
//     const buttonStyle = {
//         color: color,
//         fontSize: fontSize + "px"
//     }

//     return <button style={buttonStyle}>{text}</button>
// }

// export default function App() {
//     return(
//         <div>
//             <Button text="Click Me!" color="blue" fontSize={12}></Button>
//             <Button text="Don't Click Me!" color="red" fontSize={12}></Button>
//             <Button text="Click Me!" color="blue" fontSize={20}></Button>
//         </div>
//     );
// }

// Default props

// function Button({ text = "Click Me!", color = "blue", fontSize = 12}) {
//     const buttonStyle = {
//         color: color,
//         fontSize: fontSize = "px"
//     };

//     return <button style={buttonStyle}>{text}</button>
// }

// export default function App() {
//     return (
//         <div>
//             <Button></Button>
//             <Button text="Dnt't click me!" color="red"></Button>
//             <Button fontSize={20}></Button>
//         </div>
//     );
// }

// Functions as props
//  You can also pass through functions.

// Example
function Button({ text = "Click Me!", color = "blue", fontSize= 12}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    }

    return (
        <button onClick={handleClick} style={buttonStyle}>
            {text}
        </button>
    );
}

export default function App() {
    const handleButtonClick = () => {
        window.location.href = "https://www.google.com";
    };

    return (
        <div>
            <Button handleClick={handleButtonClick}></Button>
        </div>
    );
}
// The function handleButtonClick is defined in the parent component.
// A reference to this function is passed through as the value for the handleClick prop on the Button component.
// The function is received in Button and is called on a click event.
