import { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from './StateManagement.js';


/*      Receiving State by Props

//Received props.setUsername as setUsername

export const GrandChildInTwo = (props) => {

    const [newUsername, setNewUsername] = useState("")

    return(
        <div>
            <input onChange={(event) => {setNewUsername(event.target.value)}}/>
            <button onClick={() => {props.setUsername(newUsername)}}>Change Username</button>
        </div>
    )
    
}
*/

//      Receiving State with UseContext
export const GrandChildInTwo = () => {
    const {setUsername} = useContext(GlobalContext)

    const [newUsername, setNewUsername] = useState("")

    return(
        <div>
            <input onChange={(event) => {setNewUsername(event.target.value)}}/>
            <button onClick={() => {setUsername(newUsername)}}>Change Username</button>
        </div>
    )
    
}