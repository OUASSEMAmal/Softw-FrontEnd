import React from 'react';
import './references.css';
import NavBar from '../components/home/jsx/navbar';
import Header from '../components/home/jsx/header';
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import at from "../assets/WHO/at.png"
import C9 from "../assets/WHO/C9.png";
import C10 from "../assets/WHO/C10.png";
import C11 from "../assets/WHO/C11.png";
import soo from "../assets/WHO/soo.png";
import fort from "../assets/WHO/fort.png";
import fire from "../assets/WHO/fire.png";
import ext2 from "../assets/WHO/ext2.png";

const References = () => {
    const references = [
        {
            logo: C9,
            description: "Contact 2 ans : 6 Consultants en Transformation Staire",
            client: "Client : Ministère de la Santé au Maroc"
        },
        {
            logo: C10,
            description: "Contrat Cale : Consultants en Ingénierie/Conseils/M.B.D. Labs"
        },
        {
            logo: soo,

            description: "BEAMTEL intégrateur de solutions\n Cyber Sécurité de SOPHOS"
        },
        {
            logo: ext2 ,
            description: "BEAMTEL partenaire officiel"
        },
        {
            logo:C11,

            description: "Partenariat et Sponsor (RAMOND)"
        },
        {
            logo:at,

            description: "Accueillir des élèves Ingénieurs\n pour des Projets PFE de 6 Mois"
        },


        {
            logo: fire,

            description: "5G Private Networks"
        },


        {
            logo: fort,

            description: "Revendeur, Integrateur & Authorised Partner"
        }
    ];

    return (
        <div className="references-page">
            <Header />
            <NavBar />

            <div className="references-container">
                <h1>BEAMTEL'S REFERENCES</h1>

                <div className="references-grid">
                    {references.map((ref, index) => (
                        <div key={index} className="reference-card">
                            <div className="reference-logo">
                                <img
                                    src={ref.logo}
                                    alt={ref.title}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/logos/default.png';
                                    }}
                                />
                            </div>
                            <div className="reference-content">
                                <h3>{ref.title}</h3>
                                <p>{ref.description}</p>
                                {ref.details && (
                                    typeof ref.details === 'string' ?
                                        <p className="details">{ref.details}</p> :
                                        <div className="details">
                                            {ref.details.map((item, i) => (
                                                <p key={i}>{item}</p>
                                            ))}
                                        </div>
                                )}
                                {ref.client && <p className="client">{ref.client}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default References;