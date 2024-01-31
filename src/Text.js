import { useState, useEffect } from 'react';

//This component is based on a tutorial on the basics of React
//Component Lifecycles and the UseEffect Hook

//Lifecycle - 3 stages
//Mount
//Update
//Unmount

//UseEffect Hook allows to control how each stage occurs

export const Text = () => {
    
    const [inputText, setInputText] = useState("");
    
    useEffect(() => {
        console.log('Component Did Mount');

        return () => {
            console.log("Component Unmount")
        }
    })

    return (
        <div>
            <input onChange={(event) => {
                setInputText(event.target.value)
            }}/>
            <h2>
                {inputText}
            </h2>
        </div>
    )
}