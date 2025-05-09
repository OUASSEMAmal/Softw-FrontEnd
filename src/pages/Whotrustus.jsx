import React from 'react';
import { FaHandshake } from 'react-icons/fa';
import Header from "../components/home/jsx/header";
import Navbar from "../components/home/jsx/navbar";
import Footer from "../components/Footer";

import Tibari from "../assets/Tibari.png";
import C1 from "../assets/WHO/C1.png";
import C2 from "../assets/WHO/C2.png";
import C3 from "../assets/WHO/C3.png";
import C4 from "../assets/WHO/C4.png";
import C5 from "../assets/WHO/C5.png";
import C6 from "../assets/WHO/C6.png";
import C7 from "../assets/WHO/C7.png";
import C8 from "../assets/WHO/C8.png";

import "./Whotrustus.css";

const partnerData = [
    {
        img: C1,
        text: "Implémentation de 200 Endpoint Detection Response (EDR)\nConseil sur les pratiques ISO27001"
    },
    {
        img: C2,
        text: "Implémentation de la solution Firewall XGS de Sophos."
    },
    {
        img: C3,
        text: "Technical Audit\nWireless capacity and security\nImplémentation du Firewall XGS de Sophos."
    },
    {
        img: C4,
        text: "Deal Fortinet en cours.\nImplémentation de Fortiweb VM"
    },
    {
        img: C5,
        text: "Implémentation EDR"
    },
    {
        img: C6,
        text: "Accompagnement à la certification ISO27001 en France."
    },
    {
        img: C7,
        text: "La commande publique"
    },
    {
        img: C8,
        text: "Implémentation de la solution Firewall XGS de Sophos."
    }
];

const Whotrustus = () => {
    return (
        <div>
            <Header />
            <Navbar />

            <div className="trust-section">
                <div className="founder-section">
                    <div className="founder-content">
                        <h2 className="founder-title">MOT DU FONDATEUR</h2>
                        <img src={Tibari} alt="Tibari" className="founder-image" />
                        <p className="founder-quote">
                            La cybersécurité est devenue une arme, une force et une priorité à avoir
                            dans différents types d'entreprises. Nous sommes convaincus par les solutions
                            que nous intégrons et nous sommes partenaires de 2 des 10 premiers fournisseurs
                            mondiaux du secteur de la cyberdéfense et cybersécurité au monde.
                        </p>
                    </div>

                    <div className="trust-container">
                        <h2 className="trust-title">
                            <FaHandshake className="trust-icon" /> QUI NOUS FAIT CONFIANCE
                        </h2>

                        <div className="partners-grid">
                            {partnerData.map((partner, index) => (
                                <div key={index} className="partner-card">
                                    <img src={partner.img} alt={`C${index + 1}`} className="partner-logo" />
                                    <p className="partner-text">{partner.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer style={{ marginTop: "200px" }} />
        </div>
    );
};

export default Whotrustus;
