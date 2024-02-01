import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to={"/"}>Basics</Link>
            <Link to={"/crud"}>State and CRUD</Link>
            <Link to={"/lifecycles"}>State Lifecycle</Link>
            <Link to={"/api"}>API</Link>
            <Link to={"/parent"}>State Management</Link>
        </div>
    )
}