import "./App.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to={"/"} className="link">Basics</Link>
            <Link to={"/crud"} className="link">State and CRUD</Link>
            <Link to={"/lifecycles"} className="link">State Lifecycle</Link>
            <Link to={"/api"} className="link">API</Link>
            <Link to={"/parent"} className="link">State Management</Link>
            <Link to={"/query"} className="link">React Query</Link>
            <Link to={"/form"} className="link">Form</Link>
        </div>
    )
}