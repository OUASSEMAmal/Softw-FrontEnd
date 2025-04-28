import React, { useState } from 'react';
import './Cybersecurity.css'; // Nous créerons ce fichier CSS ensuite

const Cybersecurity = () => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div className="cybersecurity-container">
            <div
                className="cybersecurity-header"
                onClick={toggleOptions}
            >
                CYBERSECURITY
            </div>

            {showOptions && (
                <div className="cybersecurity-options">
                    <div className="cyber-option">Cyber Attacks</div>
                    <div className="cyber-option">Cyber Defense</div>
                </div>
            )}
        </div>
    );
};

export default Cybersecurity;