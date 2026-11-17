import { Link } from "react-router";

function Home() {
    return(
        <>
            <h1>Hello from the home page</h1>

            <ul>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
                <li>
                    <Link to="students">Student Page</Link>
                </li>
                <li>
                    <Link to="dashboard">Dashboard</Link>
                </li>
            </ul>
        </>
    );
}

export default Home;