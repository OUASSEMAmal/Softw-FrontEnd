import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Career from "./pages/career";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Partners from "./pages/partners";
import Products from "./pages/ProductHS/Products";
import Whotrustus from "./pages/Whotrustus";



function App() {
  return (<Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/career" element={<Career />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Whotrustus" element={<Whotrustus/>}/>
      <Route path="/login" element={<SignIn />} />
      <Route path="/Singup" element={<SignUp />} />

    </Routes>
  </Router>);
}

export default App;
