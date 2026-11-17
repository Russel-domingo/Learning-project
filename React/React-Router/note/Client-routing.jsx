// first run the command in the terminal
// - npm install react-router

// Then import it
// - import { createBrowserRouter, RouterProvider } from "react-router";

// use it
// example 

const router = createBrowserRouter([
    {
        path: "/", // the path example the root
        element: "<App/>" // this is the element example is <App></App>
    },
    // another example
    {
        path: "profile", // the path is the profile
        element: "<Profile/>", // the element is the Profile
    },
]);

// use the RouterProvider here!
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// The link element

