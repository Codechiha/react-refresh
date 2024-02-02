import { useContext } from 'react';
import { GlobalContext } from './StateManagement.js';

/*      Receiving State with Props
export const ChildOne = (props) => {
    return (
        <div>
            <h1>Child 1: {props.username}</h1>
        </div>
    )
}
*/

//      Receiving State with useContext
export const ChildOne = () => {
    const {username} = useContext(GlobalContext)
    return (
        <div>
            <h1>Child 1: {username}</h1>
        </div>
    )
}