import "./App.css";
import { useState } from 'react';
import { Api } from "./Api.js"
import { Crud } from "./Crud.js";
import { Basics } from "./Basics.js";
import { Text } from "./Text.js";


//This component holds all the Components
// Comes with the React Boilerplate code

function App() {

  const [showText, setShowText] = useState(false)

  return (
    <div className="App">
      <Basics />
      <Crud />
      <h2>Understanding Lifecycle: Mount, Update, Unmount</h2>
      {showText && <Text />}
      <button onClick={() => {setShowText(!showText)}}>Show Text</button>
      <Api />
    </div>
    
  );
}



export default App;
