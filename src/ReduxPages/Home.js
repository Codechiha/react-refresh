
import { useSelector } from "react-redux";


/*      Using Redux
    Redux was created to centralize state management.
    1. npm install @reduxjs/toolkit react-redux
    2. 

*/

export const Home = () => {
    const username = useSelector((state) => state.user.value.username)
    return (
        <div>
            Home Page
            Current User: {username}
        </div>
    )
}