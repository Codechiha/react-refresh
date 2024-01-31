
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

//This component shows the basics of Accessing and Displaying API data

// fetch() function

// fetch("https://catfact.ninja/fact")
// .then((res) => res.json())
// .then((data) => {
//     console.log(data)
// })

//AXIOS

//npm install axios

// axios.get("https://catfact.ninja/fact")
// .then((res) => {
//     console.log(res.data)
// })



export const Api = () => {

    const [catFact, setCatFact] = useState('');

    const handleFetchData = () => {
        axios.get("https://catfact.ninja/fact")
        .then((res) => {
            setCatFact(res.data.fact)
    })}
    
    useEffect(() => {
        handleFetchData()
    }, [])

    const [name, setName] = useState("")

    const [ageObj, setAgeObj] = useState(null)

    const handleFetchAge = () => {
        axios.get(`https://api.agify.io/?name=${name}`)
        .then((res) => {
            setAgeObj(res.data)
        })
    }

    return(
        <div>
            <h1>Accessing APIs and Some Basic Functions</h1>
            <button onClick={handleFetchData}>Generate Cat Fact</button>
            <p>{catFact}</p>
            <input onChange={(event) => {
                setName(event.target.value)
            }}/>
            <button onClick={handleFetchAge}>Fetch Age</button>
            {/* {object?.name) --> this ? tells React not to access the object if its null to prevent errors*/}
            <h2>Name: {ageObj?.name}</h2>
            <h2>Age: {ageObj?.age}</h2>
            <h2>Count: {ageObj?.count}</h2>
        </div>
    )
}