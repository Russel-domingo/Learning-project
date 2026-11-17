import { Link } from "react-router";

const ErrorPage = () => {
    
    return(
        <div>
            <h1>Oh no, this route doesn't exist</h1>
            <Link to="/">
                You can go back to the home page by clicking through me
            </Link>
        </div>
    );
};

export default ErrorPage;