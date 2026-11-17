// More On State

const { useState } = require("react");

// How to structure state

// State should not be mutated 
// Mutating state is a no-go area in react as it lead to unpredicted results.
// Primitives are already immutable, but if you are using reference-type values i.e arrays and objects, never mutate them.
// we should treat state as if it was immutable 

function Person() {
    const [person, setPerson] = useState({name: "John", age: 100});

    // Bad - Don't do this!

    const handleIncreaseAge = () => {
        // mutating the current state object
        person.age = person.age + 1;
        setPerson(person);
    };

    // GOOD - DO this!

    const handleIncreaseAge = () => {
        // copy the existing person object into a new object
        // while updating the age property
        const newPerson = {...person, age: person.age + 1};
        setPerson(newPerson);  
    };
}
// State updates are asynchronous. What this implies is that whenever you call the setState function,
// React will apply the update in the next component render. This concept can take a while to wrap your head around.

// Remember, state variables are't reactive: components is. This can be understood by the fact that calling setState re-renders the entire component 
// instead of just changing the stat variable on the fly

// Controlled components
// There a re native html elements that maintain their own internal state. 
// The input elements is a great example. You type into an input and updates its own value
// on evert keystroke. for many use-cases, you would like to control the value of the input 
// element, i.e., set its value yourself. This is where controlled components come in

