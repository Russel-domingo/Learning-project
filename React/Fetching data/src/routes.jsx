import { createBrowserRouter } from "react-router";
// import Home from "./Home";
import FetchGetRequest from "./FetchGetRequest";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/post/:postId",
        element: <FetchGetRequest />,
    },
]);

export default router;