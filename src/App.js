import "./App.css";
import { Api } from "./Api.js"
import { Crud } from "./Crud.js";
import { Basics } from "./Basics.js";
import { Text } from "./Text.js";
import { Navbar } from "./Navbar.js";
import { Parent } from "./StateManagement.js";
//Incorporating Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*        Using Routes
 1. ~npm install react-router-dom
 2. import hooks "BrowserRouter", "Routes", "Route", "Link"
 *note: the 'as' keyword is used to rename a hook
 3. BrowserRouter: houses the entire Routing system
   a. Inside BrowserRouter and outside Routes, Link is used navigate to each Route
 4. Routes: houses the various Route components for each page 
 */

// App Component in best practice holds all the Components
// and is displayed in the index.js file (also comes with boilerplate)
// Comes with the React Boilerplate code

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Basics />}/>
          <Route path={"/crud"} element={<Crud />}/>
          <Route path={"/lifecycles"} element={<Text />} />
          <Route path={"/api"} element={<Api />} />
          <Route path={"/parent"} element={<Parent />} />
          <Route path={"*"} element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
