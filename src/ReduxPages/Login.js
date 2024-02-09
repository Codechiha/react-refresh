import { useState } from "react";
import { login, logout } from "./store.js";
import { useDispatch, useSelector } from "react-redux";

/*      Redux
    Users will update the state username and it will be passed
    into Home by displaying username in the Home Page

    useDispatch: modifying states
     - must useDispatch to use the store reducer actions
    useSelector: getting states

    In this example, the input onChange updates a variable newUsername
    newUsername through useDispatch updates the state.value in the store
    through the login function

*/

export const Login = () => {
    const [newUsername, setNewUsername] = useState('');

    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.value.username)

    return (
        <div>
            {username}
            <input 
                onChange={(event) => {
                    setNewUsername(event.target.value)
                }}
            />
            <button onClick={() => dispatch(login({ username: newUsername}))}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
};