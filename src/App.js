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
//React-Query
import { Query } from './Query.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//React Forms
import { Form } from "./Form.js"
//Custom Hooks
import { useCount } from "./CustomHook/useCount.js";
import { useToggle } from "./CustomHook/useToggle.js";
//Redux
import { Home } from "./ReduxPages/Home.js";
import { Login } from "./ReduxPages/Login.js";
//Provider -> gives state access to all components it wraps
//In this example, the store holds the state
import { Provider } from "react-redux";
import { store } from "./ReduxPages/store.js";


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

  // Note: using {} in the return in useCount and here DOES NOT allow for renaming of variables
  const {count, increase, decrease, reset} = useCount(); 

  // Note: using [] in the return in useToggle and here ALLOWS for renaming of variables
  const [ isVisible,toggle ] = useToggle();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Provider store={store}>
        <Router>
          <Navbar />            
          <Routes>
            <Route path={"/"} element={<Basics />} />
            <Route path={"/crud"} element={<Crud />}/>
            <Route path={"/lifecycles"} element={<Text />} />
            <Route path={"/api"} element={<Api />} />
            <Route path={"/parent"} element={<Parent />} />
            <Route path={"/query"} element={<Query />} />
            <Route path={"/form"} element={<Form />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/login"} element={<Login />} /> 
            <Route path={"*"} element={<h1>Page Not Found</h1>} />
          </Routes>  
        </Router>
        </Provider>
      </QueryClientProvider>
      <div>
        <h1>Custom Hooks</h1>
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && 
          <div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <h2>{count}</h2>
          </div>
        } 
      </div>
      
    </div>
    
  );
}

export default App;
