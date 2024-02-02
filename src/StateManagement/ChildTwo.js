import { GrandChildInTwo} from './Grandchild.js';
import { useContext } from 'react';
import { GlobalContext } from './StateManagement.js';


/*      Receving State with Props
//Received username and setUsername
//Accessed with props arg

//Passing setUsername to GrandchildInTwo
//In GrandChild, the variable "setUsername" refers to "props.setUsername" in ChildTwo

export const ChildTwo = (props) => {
    return (
        <div>
            <h1>Child 2: {props.username}</h1>
            <GrandChildInTwo setUsername={props.setUsername}/>
        </div>
    )
}
*/

//      Receiving State with useContext
export const ChildTwo = () => {
    const {username, setUsername} = useContext(GlobalContext)
    return (
        <div>
            <h1>Child 2: {username}</h1>
            <GrandChildInTwo setUsername={setUsername}/>
        </div>
    )
}