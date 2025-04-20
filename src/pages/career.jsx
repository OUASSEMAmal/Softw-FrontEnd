import React, { useState } from 'react';
import './career.css';
import NavBar from '../components/home/jsx/navbar';
import Header from '../components/home/jsx/header';
import backgroundImage from "../assets/background.jpg";
import Footer from "../components/Footer";



const Career = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        collaborationType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div>
           <Header />
            <NavBar />
            <section
                className="hero-section"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >

        <div className="contact-form-container">

            <h2>Send your message to us:</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Are you looking for what kind of collaboration:</label>
                    <input
                        type="email"
                        id="collaborationType"
                        name="collaborationType"
                        value={formData.collaborationType}
                        onChange={handleChange}
                        required
                    />

                </div>

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
        </section>
            <div className="hero-content">
                <h1>Why You</h1>
                <p>
                    Because our success depends on yours! You're passionate about cybersecurity,
                    data protection is one of your priorities, you're looking to develop your skills in a
                    stimulating and constantly evolving sector, and you're looking for a rich and varied experience...
                    many opportunities are available to you at SOFTAWERTICH!
                </p>
                <h2>Why US ?</h2>
                <p>
                    At  SOFTAWERTICH, employees are valued and empowered. We have much more than a job to offer you:
                    A collaborative work environment that promotes diversity and mutual respect,
                    Assignments that stimulate your intellectual curiosity,
                    The opportunity to grow and flourish in a career with a future
                </p>
            </div>

<Footer/>
        </div>
    );
};

export default Career;

