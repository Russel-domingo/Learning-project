// import { createBrowserRouter } from "react-router";
import Home from "./home";
import About from "./About";
import Contact from "./Contact";
import StudentDetails from "./StudentDetails";
import StudentPage from "./Studentpage";
import Dashboard from "./Dashboard";
import Overview from "./navigation/Overview";
import Settings from "./navigation/Settings";

// import ErrorPage from "./ErrorPage";

const router = ([
    {
        path: "/",
        element: <Home />,
        // errorElement: <ErrorPage/>
    },
    {
        path: "about",
        element: <About />,
    },
    {
        path: "contact",
        element: <Contact />,
    },
    {
        path: "students",
        element: <StudentPage />,
        children: [
            { index: true, element: <StudentDetails /> },
            { path: ":studentId", element: <StudentDetails /> }
        ],

    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            { path: 'overview', element: <Overview /> },
            { path: 'settings', element: <Settings /> },
        ]
    }
    // {
    //     path: "/students/:studentId",
    //     element: <StudentDetails/>
    // }
]);

export default router;