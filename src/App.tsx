import React from 'react';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Login from "./componets/login";

function App() {
  return (
      <div>
             <Link to="/login">Login</Link>
             <Routes>
              <Route path="/login"  element={<Login/>}/>
            </Routes>
         </div>
  );
}

export default App;
