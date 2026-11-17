import { NavLink } from "react-router";
import { Outlet } from "react-router";
function Dashboard() {

    return(
        <div>
            <h1>Dashboard overview</h1>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "red": ''}>Go back to home</NavLink>
                </li>
                <li>
                    <NavLink to="overview" className={({isActive}) => isActive ? "red": ''}>Overview</NavLink>
                </li>
                <li>
                    <NavLink to="settings">Settings</NavLink>
                </li>
            </ul>
            
            <Outlet></Outlet>
        </div>
        
    );
}
export default Dashboard;   