import { Link } from "react-router";

function About() {
    return(
        <div>
            <p>Hello from the about page</p>
            <Link to="/">Click here to back to profile</Link>
        </div>
    );
}

export default About;