import React, { Component } from 'react'

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import RouteBASE from "./Pages/RouteBASE";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

export class App extends Component {
  render() {
    return (
      <>
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<RouteBASE />}>  
            <Route index element={<Home />} /> 
            <Route path="contact" element={<Contact />} />
            <Route path="About" element={<About />} />
         </Route>
      </Routes>
    </BrowserRouter> 
      </>
    )
  }
}

export default App;

