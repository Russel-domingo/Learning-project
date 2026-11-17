// RENDERING TECHNIQUES!!!

// Rendering a list of elements in jsx 
// List of multiple animal


// HARDCODED LIST 
// function App() {
//     return (
//         <div>
//             <h1>Animal</h1>
//             <ul>
//                 <li>Lion</li>
//                 <li>Cow</li>
//                 <li>Snake</li>
//                 <li>Lizard</li>
//             </ul>
//         </div>
//     );
// }

// USING AND EMBED EXPRESSION

// function App() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"]
//     return (
//         <div>
//             <h1>Animals</h1>
//             <ul>
//                 {animals.map((animal) => {
//                     return <li key={animal}>{animal}</li>
//                 })}
//             </ul>
//         </div>

//     );
// }

// function App() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];
//     const animal = animals.map((animal) => {
//         return <li key={animal}>{animal}</li>
//     });

//     return(
//         <div>
//             <h1>Animals: </h1>
//             <ul>
//                 {animal}
//             </ul>
//         </div>
//     );
// }

// WHAT IS THE KEY IN OUR <LI> element?. When we dynamically render list of components, we must give it a key, which acts like an ID.

// RENDERING A LIST OF COMPONENTS IN JSX

// function ListItem(props) {
//     return <li>{props.animal}</li>
// }

// function List(props) {
//     return (
//         <ul>
//             {props.animals.map((animal) => {
//                 <ListItem key={animal} animal={animal}></ListItem>
//             })}
//         </ul>
//     );
// }

// function App() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];

//     return(
//         <div>
//             <h1>Animals: </h1>
//             <List animals={animals}></List>
//         </div>
//     );
// }


// CONDITIONAL RENDERING


// USING TERNARY OPERATOR
// function List(props) {
//     return(
//         <ul>
//             {props.animals.map((animal) => {
//                 return animal.startsWith("L") ? <li key={animal} animal={animal}></li> : null;
//             })};
//         </ul>
        
//     );
// }


// USING THE && OPERATOR

function List(props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return animal.startsWith("L") && <li key={animal} animal={animal}></li>
            })}
        </ul>
    );
}

// WE CAN ALSO USE if, if/else, and switch

function List (props) {
    if (!props.animals) {
        return <div>Loading ....</div>
    } 

    if (props.animals.length === 0) {
        return <div>There is no animals in the list</div>
    }

    return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>
      })}
    </ul>
  );
}

function App() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return(
        <div>
            <h1>Animals </h1>
            <List animals={animals}></List>
        </div>
    );
}