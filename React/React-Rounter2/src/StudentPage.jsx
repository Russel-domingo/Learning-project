import { Link } from "react-router";
import { Outlet } from "react-router";

function StudentPage() {
    return(
        <div>
            <h1>Hello from student page</h1>
            <Outlet/>
            <Link to="/">Go back to home page</Link>
        </div>
        
    );
}
export default StudentPage;