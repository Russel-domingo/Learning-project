// What are components?
//  Breakable User Interface that are independent and reusable chunks

// Example
//  App: which represent your main application and will be the parent of all other components. 
//  Navbar: which will be the navigation bar.
//  MainArticle: which will be the component that renders you main content.
//  NewsletterForm: which is a form that lets a user input their email to receive the weekly newsletter.

// The example above are reusable chucks as javaScript function which can take some kind of input and return a React element 

// HOW TO CREATE A COMPONENTS

function Greeting() {
    return <h1>"I swear by my pretty floral bonnet, I will end you"</h1>
}
// React components must be capitalized!!!

// WHERE DO COMPONENTS LIVE?
//  Components is just hanging out in its own dedicated file. This makes it independent from the rest of the codebase.
//  And you need to export it
export default Greeting;

// Greeting should be capitalized!! because React use the capitalized to tell the difference between an HTML and an instance of a React Component.