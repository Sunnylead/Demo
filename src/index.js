// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();







import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RouteBASE from "./Pages/RouteBASE";
import Contact from "./Pages/Contact";
import About from "./Pages/About";


export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<RouteBASE />}>  
            <Route index element={<Home />} /> 
            <Route path="contact" element={<Contact />} />
            <Route path="About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </React.StrictMode>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  