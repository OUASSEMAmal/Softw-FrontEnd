import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Career from "./pages/career";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Partners from "./pages/partners";
import Products from "./pages/ProductHS/Products";
import Whotrustus from "./pages/Whotrustus";
import Cybersecurity from "./pages/Cyber/Cybersecurity";
import ForgotPassword from "./components/Auth/ForgotPassword";
import References from "./pages/References";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/privacyPolicy";
import Chatbot from "./components/Chatbot";
import { Box } from '@mui/material';

function App() {
  return (<Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/career" element={<Career />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Whotrustus" element={<Whotrustus/>}/>

      <Route path="/login" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />




    </Routes>
  </Router>);
}

export default App;
