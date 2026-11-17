// COMPONENT LIFE CYCLE METHOD

// const { useEffect } = require("react");

// There are three stages to a component's life: mounting, updating, and unmounting.


// render()
// - most used lifecycle method. the only required lifecycle method in a class component.
// - it runs on mount and update. Render should be pure, meaning id doesn't modify component state.


// componentDidMount()
// - This method is run after the component is mounted. You should make any calls to fetch date that is need for the component here.
// - also a good place to perform any operations that depend on the component.



// componentDidUpdate()
// - This method is run after a component re-renders. need to be careful about what you update in this method.
// - as if you're updating state indiscriminately, a re-render is caused.




// componentWillUnmount()
// - the last lifecycle method. this is called before a component is unmounted and destroyed.
// - in this method you should be performing cleanup actions, so that would be cancelling network requests, clearing timers etc.



// How useEffect() combines the lifecycle methods.
// - useEffect hood used in functional components is essentially a combination of componentDidMount, componentDidUpdate, and componentWillUnmount.
// - which method it related to varied based on its dependency array, and if it returns anything.
//  - An empty dependency array would be equivalent to componentDidMount.
//  - A dependency array with a value/values in it would be a combination of componentDidMount and componentDidUpdate, but only updating when dependencies change.
//  - No dependency array would be equivalent to componentDidMount and componentDidUpdate combined.
//  - A return function inside of a useEffect() hook would be equivalent to componentWIllUnmount.

//Example
// useEffect(() => {
//     placeholderFunction();
//     return () => cleanupFunction();
// }, []);

// - in the above example, the useEffect contains the functionality of componentDidMount and componentWillUnmount via the return function.
// - This example doesn't have the componentDidUpdate functionality because of an empty dependency array.
