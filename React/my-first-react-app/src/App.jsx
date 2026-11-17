// function Button() {
//   return (
//     <button>Click Me!</button>
//   );
// }

// function Button2() {
//   return (
//     <button>Don't Click Me!</button>
//   );
// }


// function Button(props) {
//   const buttonSyle = {
//     color: props.color,
//     fontSize: props.fontSize + "px"
//   }

//   return (
//     <button style={buttonSyle}>{props.text}</button>
//   );
// }
// export default function App() {
//   return (
//     <div>
//       <Button text="Click Me!" color="blue" fontSize={12}></Button>
//       <Button text="Don't Click Me!" color="red" fontSize={12}></Button>
//       <Button text="Click Me!" color="blue" fontSize={20}></Button>
//     </div>
//   );
// }

// export default function App() {
//   const animals = ["Lion", "cow", "Snake", "Lizard"];
//   const animalList = animals.map((animal) =>{
//     return <li key={animal}>{animal}</li>;
//   });

//   return(
//     <div>
//       <h1>Animals: </h1>
//       <ul>
//         {animalList}
//       </ul>
//     </div>
//   );
// }


// function ListItem(props) {
//   return <li>{props.animal}</li>
// }

// function List(props) {
//   return(
//     <ul>
//       {props.animals.map((animal) => {
//         return <ListItem key={animal} animal={animal}></ListItem>
//       })}
//     </ul>
//   );
// }


// CONDITIONAL RENDERING --------------------------------------------

// function List(props) {
//   return(
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
//       })}
//     </ul>
//   );
// }

// function List(props) {
//   return(
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith("L") && <li key={animal}>{animal}</li>
//       })}
//     </ul>
//   ); 
// }

// Using if, if/else and switch
// function List(props) {
//   if (!props.animals) {
//     return <div>Loading ......</div>;
//   }

//   if (props.animals.length === 0) {
//     return <div>There is no animals in the list</div>;
//   }

//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return <li key={animal}>{animal}</li>
//       })}
//     </ul>
//   );
// }



// function Item({ name, isPacked }) {
//   return (
//     <li>
//       {isPacked ? (<del>{name + "✅"}</del>) : (name)}
//     </li>
//   );
// }
// export default function App() {
//   return(
//     <div>
//       <h1>Sally Ride's Packing list</h1>
//       <ul>
//         <Item 
//           name="Space suit"
//           isPacked={true}
//         />

//         <Item
//           name="Helmet with a golden leaf"
//           isPacked={true}
//         />

//         <Item
//           name="Photo of tom"
//           isPacked={false}
//         />
//       </ul>
      
//     </div>
//   );

// }

// const people = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//   }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist'
//   }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist'
//   }, {
//     id: 3,
//     name: 'Percy Lavon Julian',
//     profession: 'chemist'
//   }, {
//     id: 4,
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist'
//   }
// ];

// const chemist = people.filter(person => {
//   return person.profession == "chemist";
// });

// function List(props) {
//   return <li>{props.person.name}: {props.person.profession}</li>
// }


// function PeopleList(props) {
//   return (
//     <ul>
//       {props.people.map((person) =>{
//         return <List key={person.id} person={person}></List>
//       })}
//     </ul> 
//   );
// } 
// export default function App() {
  

//   return(
//     <div>
//       <PeopleList people={chemist}></PeopleList>
//     </div>
//   );
// }

// import { useState } from 'react';
// import './App.css';

// const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple', 'black'];

// function App() {
//   const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
//   const [backgroundChangeCount, setBackgroundChangeCount] = useState(0);
//   const onButtonClick = (color) => () => {
//     setBackgroundColor(color);
//     setBackgroundChangeCount(backgroundChangeCount + 1);
//   };

//   return (
//     <div
//       className="App"
//       style={{
//         backgroundColor,
//       }}
//     >
//       <h1>{backgroundChangeCount}</h1>
//       {COLORS.map((color) => (
//         <button
//           type="button"
//           key={color}
//           onClick={onButtonClick(color)}
//           className={backgroundColor === color ? 'selected' : ''}
//         >
//           {color}
//         </button>
//       ))}
//     </div>
//   );
// }
// import { useState } from "react";

// function App() {
//   const [person, setPerson] = useState({name: "John", age: 100});

//   const handleIncreaseAge = () => {
//     console.log("inn handleIncreaseAge (before setPerson call): ", person);
//     setPerson({...person, age: person.age + 1});

//     console.log("in handleIncreaseAge (after setperson call): ", person);
//   }

//   console.log("during render: ", person);

//   return (
//     <div>
//       <h1>{person.name}</h1>
//       <h2>{person.age}</h2>
//       <button onClick={handleIncreaseAge}>Increase Age</button>
//     </div>
//   );
// }
// export default App;


// USING EFFECT
// THE useEffect hook --------------------------------------------------------
import { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    return () => {
      clearInterval(key);
    }
  }, []);

  return (
    <p>{counter} seconds have passed.</p>
  );
}