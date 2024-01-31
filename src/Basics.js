import { useState } from "react";

//The Basics of React
// File pathways, how to import and export components to the App component
// First, Set up the useState State variable and function
// Second, create a handler function for HOW the function alters the state varaible
// Third, setup the JSX elements to use the handler functions and how
//   that data is displayed

export const Basics = () => {
    //Step 1: setup useState to allow changes to state
    // [variable, function that mutates variable]
    const [inputValue, setInputValue] = useState("");
  
    const [age, setAge] = useState(0);
  
    const [showText, setShow] = useState(true);
  
    const [textColor, setTextColor] = useState("black")
    
    //Step 2: setup function to dictate how the earlier function mutates the variable

    const handleInputChange = (event) => {
      console.log(event.target.value)
      setInputValue(event.target.value)
    }
  
    const handleAgeChange = () => {
      setAge(age + 1)
    }
  
    const handleShowText = () => {
      setShow(!showText)
    }
  
    const handleTextColor = () => {
      setTextColor(textColor === "black" ? "red" : "black")
    }
  
    return (
        //Step 3: setup the elements that cause/show how the data changes
      <div className="App">
        <h1 className='name'>1. Understanding Some Basic React Elements</h1>
        <button onClick={handleAgeChange}>Increase Age</button>
        <h5>{age}</h5>
        <input type="text" onChange={handleInputChange} />
        <h5>{inputValue}</h5>
        <button onClick={handleShowText}>Show/Hide</button>
        <button onClick={handleTextColor}>Change Colors</button>
        {showText && <h5 style={{color: textColor}}>This Text is a Ghost</h5>}    
      </div>
    );
  }