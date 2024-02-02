//Basic Elements and Functions
import "./App.css";
import { Api } from "./Api.js"
import { Crud } from "./Crud.js";
import { Basics } from "./Basics.js";
import { Text } from "./Text.js";
//State Management
import { Parent } from "./StateManagement/StateManagement.js";
//Incorporating Routes
import { Navbar } from "./Navbar.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Using React-Query
import { Query } from './Query.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


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
  const client = new QueryClient({
    defaultOptions:{
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Basics />}/>
            <Route path={"/crud"} element={<Crud />}/>
            <Route path={"/lifecycles"} element={<Text />} />
            <Route path={"/api"} element={<Api />} />
            <Route path={"/parent"} element={<Parent />} />
            <Route path={"/query"} element={<Query />} />
            <Route path={"*"} element={<h1>Page Not Found</h1>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
    
  );
}

export default App;
