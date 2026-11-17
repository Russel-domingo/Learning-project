// What is JSX?
//  JSX it is a syntax extension for JavaScript to write a html markup inside your JavaScript file.

// Why do we use JSX?
//  JSX allows React to separate concerns by containing both rendering logic and content in the same place (a component!)

// Rules of JSX
//  1. Return a single root element.
//      If you wish to return multiple elements in a component, you can do so by wrapping them in a parent tag.
//      This can be a <div>, or, if you don't want the element container, You could use a React fragment like so <>Children</>

// Correct
function App() {
    // Could replace <></>

    return (
        <>
            <h1>Example h1</h1>
            <h2>Example h2</h2>
        </>
    );
}

// Incorrect
// function App() {
//     return (
//         <h1>Example h1</h1>
//         <h2>Exaple h2</h2>
//     );
// }

// 2. Close all tags.
//  In JSX we must explicitly close and wrap these tags.

// Correct
function App() {
    return (
        <>
            <input/>
            <li></li>
        </>
    );
}

// Incorrect
// function App() {
//     return (
//         <>
//             <input>
//             <li>
//         </>
//     );
// }

// 3. camelCase Most things.
//  JSX turn into JavaScript, and attribute of elements become keys of JavaScript objects, you can't use dashes or reserved words.
//  many html attributes are written in camelCase and instead of class you'd use className.

// Correct
function App() {
    return (
        <div className="container">
            <svg>
                <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
            </svg>
        </div>
    );
}

// Incorrect
function App() {
    return (
        <div class="container">
            <svg>
                <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
            </svg>
        </div>
    );
}

// CONVERTING HTML TO JSX
//  Example
    /* <h1> Test title</h1>
        <svg>
            <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
        </svg>
        <form>
            <input type="text">
        </form> 
    */
//  In the example above if you return this to a react component, you would get many errors.

/* 
    <div>
        <h1> Test title</h1>
        <svg>
            <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
        </svg>
        <form>
            // this is the error <input type="text">
        </form>
    </div> 
*/

// The issue in  the second example is that we need to close the input tag, Remember the rules all tag must be close.
/* <div>
    <h1>Test title</h1>
    <svg>
        <circle cx="25" cy="75" r="20" stroke="green" (this is the error stroke-width="2")/>
    </svg>
    <form>
        <input type="text" />
    </form>
</div> */

// The last issue is that we haven't camelCased our attribute.