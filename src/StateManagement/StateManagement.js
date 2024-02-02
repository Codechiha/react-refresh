/*      State Management
Using "props" to pass state access to child components
1. Use this Component as the Parent
2. Create 2 child components (sibling components to each other)
3. Create a grandchild component
4. Show state access through use of props

5. Import the useContext hook 
 a. useContext hook allows state access but much more easily readable
*/
import { useState, createContext } from 'react';
import { ChildOne } from './ChildOne.js';
import { ChildTwo } from './ChildTwo.js';

/*      Passing State with props

username is passed to ChildOne and ChildTwo
setUsername is passed to ChildTwo to pass to Grandchild

export const Parent = () => {
    const [username, setUsername] = useState('origin')

    return (
        <div>
            <h1>Understanding State Management</h1>
            <ChildOne username={username}/>
            <ChildTwo username={username} setUsername={setUsername}/>
        </div>
    )
}
*/

//      Passing State with useContext
export const GlobalContext = createContext();

export const Parent = () => {

    const [username, setUsername] = useState('origin')

    return (
        <div>
            <GlobalContext.Provider value={{username, setUsername}}>
                <ChildOne />
                <ChildTwo />
            </GlobalContext.Provider>
            
        </div>
    )
}