
// import logo from './logo.svg';
//import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import {HashRouter, Route, Routes} from "react-router-dom";
import React from 'react';

function App() {
  return (
    
    <HashRouter>
      <div>
        <Routes>
          <Route path="/Labs/*" element={<Labs/>} />
          <Route path ="Kanbas/*" element={<Kanbas />} />             
        </Routes>
      </div>
    </HashRouter>       
  );
}

export default App;
