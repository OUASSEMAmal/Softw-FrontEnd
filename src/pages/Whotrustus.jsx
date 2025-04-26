import React from 'react';
import { FaShieldAlt, FaHandshake, FaGlobe } from 'react-icons/fa';
import Header from "../components/home/jsx/header";
import Navbar from "../components/home/jsx/navbar";
import Tibari from "../assets/Tibari.png";
import Whotrustuse from "../assets/Whotrustuse.png";
import "./Whotrustus.css"
import Footer from "../components/Footer";

const Whotrustus = () => {
    return (
        <div className="trust-page">
            <Header />
            <Navbar />

            <div className="trust-section">
                <div className="founder-section">
                    <div className="founder-content">
                        <h2 className="founder-title">WORD FROM THE FOUNDER</h2>
                        <img src={Tibari} alt="Tibari" className="Tibari" />

                        <div className="trust-content">
                            <div className="trust-text">
                                <p className="trust-quote">
                                    Cybersecurity has become a weapon, a strength, and a priority
                                    to be had in various types of businesses.
                                    We are convinced by the solutions we integrate and we are partners
                                    with two of the top 10 global providers in the cyber defense
                                    and cyber security sector.
                                </p>
                            </div>
                        </div>
                </div>

                <div className="trust-container">
                    <h2 className="trust-title">
                        <FaHandshake className="trust-icon" /> Who Trusts Us  </h2>
                       <img src={Whotrustuse} alt="Whotrustuse" className="Whotrustuse" />


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Whotrustus;