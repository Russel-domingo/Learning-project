// WHAT IS STATE?
// State is a component's memory.

// Anatomy of useState
//  when you call useState, you are telling React that you want this component to remember something.

// Giving a component multiple state variable
// example

// const [index, setIndex] = useState(0);
// const [showMore, setShowMore] = usesState(false);

// State is isolate and private
// State is a local instance of the screen. if you render the same component twice, each copy will have completely isolated state!.

// RECAPS!!!
// Use a state if the components need to remember some information between render.
// State variable are declared by calling the useState Hook.
// Hooks are special function that starts with use. 

// RENDER AND COMMIT
// Before your components are displayed on screen, they must be rendered by React.

// Image that you components are cooks in the kitchen, assembling tasty dished from ingredients.
// In this scenario, React is the waiter who puts in requests from customers and bring their orders. This process of requesting and serving the UI

// Three steps 
//  Triggering a render
//  Rendering the component
//  Committing to the DOM

// Step 1: Trigger a render
//  Two reasons for a component to render:
//    1. It's the component's initial render.
//    2. The component's state has been updated.

// INITIAL RENDER
// - When your app starts, you need to trigger the initial render.

// Re-renders when state updates
// - Once the component has been initially rendered, you can trigger further renders by updating its state
//  with the set function.

// Step 2: React renders your components
// - After you trigger a render, React calls your components to figure out what to display on screen.
//      On initial render, React will call the roo component
//      For subsequent renders, React will call the function component whose state update triggered the render.

// Step 3: React commits change to the DOM
// - After rendering your components, React will modify the DOM.
//      For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has create on screen
//      For re-renders, React will apply the minimal necessary operations to mae the DOM match the latest rendering output.

// EPILOGUE: BROWSER PAINT
// - After rendering is done and React updated the DOM, the browser will repaint the screen. Although this process is know as browser rendering 
