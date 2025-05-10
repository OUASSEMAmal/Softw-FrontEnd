import React from 'react';
import { Container, Row, Col, Card, ListGroup, Accordion, Badge } from 'react-bootstrap';
import Navbar from './home/jsx/navbar';
import Header from './home/jsx/header';
import Footer from './Footer';
import './privacy-policy.css';

const PrivacyPolicy = () => {
    const policySections = [
        {
            title: "Collecte de données personnelles",
            content: (
                <>
                    <p>Nous collectons des données personnelles lorsque vous interagissez avec notre site, notamment :</p>
                    <ListGroup variant="flush" className="small">
                        {[
                            { icon: "bi bi-person-fill", text: "Votre nom" },
                            { icon: "bi bi-envelope-fill", text: "Votre adresse e-mail" },
                            { icon: "bi bi-telephone-fill", text: "Votre numéro de téléphone" },
                            { icon: "bi bi-credit-card-fill", text: "Vos informations de paiement" },
                            { icon: "bi bi-globe", text: "Votre adresse IP" },
                            { icon: "bi bi-activity", text: "Informations relatives à votre utilisation du site" }
                        ].map((item, index) => (
                            <ListGroup.Item key={index} className="d-flex align-items-center">
                                {/* eslint-disable-next-line no-template-curly-in-string */}
                                <i className='{${item.icon} text-primary me-2}'></i>
                                {item.text}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </>
            )
        },
        {
            title: "Utilisation des données personnelles",
            content: (
                <>
                    <p>Les données personnelles sont utilisées pour :</p>
                    <ListGroup variant="flush">
                        {[
                            "Fournir et personnaliser nos services",
                            "Traiter vos commandes et paiements",
                            "Envoyer des informations liées à vos achats",
                            "Répondre à vos demandes ou questions",
                            "Vous envoyer des offres promotionnelles (avec votre consentement)"
                        ].map((item, index) => (
                            <ListGroup.Item key={index} className="d-flex">
                                <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                {item}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </>
            )
        },
        {
            title: "Partage des données personnelles",
            content: "Nous ne vendons, louons ni partageons vos données personnelles à des fins commerciales. Cependant, vos informations peuvent être partagées avec des prestataires de services tiers pour le fonctionnement de notre site (ex. prestataires de paiement, hébergement)."
        },
        {
            title: "Protection des données personnelles",
            content: "Nous mettons en place des mesures de sécurité techniques et organisationnelles pour protéger vos données personnelles contre la perte, l'accès non autorisé ou la divulgation."
        },
        {
            title: "Cookies",
            content: "Nous utilisons des cookies pour améliorer l'expérience de navigation et analyser l'utilisation du site. Vous pouvez configurer votre navigateur pour refuser les cookies, bien que certaines fonctionnalités pourraient être limitées."
        },
        {
            title: "Conservation des données",
            content: "Nous conservons vos données aussi longtemps que nécessaire pour les objectifs définis dans cette politique ou pour respecter nos obligations légales."
        },
        {
            title: "Droits des utilisateurs",
            content: "Vous avez le droit d'accéder, de corriger, de supprimer ou de restreindre l'utilisation de vos données personnelles. Pour exercer ces droits, contactez-nous à l'adresse suivante : contact@beamtel.ma."
        },
        {
            title: "Modifications de la politique",
            content: "Nous pouvons modifier cette politique à tout moment. Les modifications seront publiées sur cette page avec la date de mise à jour. Nous vous encourageons à consulter régulièrement cette page."
        }
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <Navbar />

            <main className="flex-grow-1 privacy-policy-page">
                <Container className="my-5">
                    <Row className="justify-content-center">
                        <Col lg={10} xl={8}>
                            <Card className="shadow-lg border-0">
                                <Card.Header className="bg-primary text-white py-4">
                                    <h1 className="text-center mb-0">
                                        <i className="bi bi-shield-lock me-2"></i>
                                        Politique de Confidentialité
                                    </h1>
                                </Card.Header>

                                <Card.Body className="p-4 p-md-5">
                                    <div className="text-center mb-5">
                                        <p className="lead text-muted">
                                            Chez <strong className="text-primary">BEAMTEL.ma</strong>, nous accordons une grande importance
                                            à la protection de vos données personnelles.
                                        </p>
                                    </div>

                                    <Accordion defaultActiveKey="0" flush className="mb-4">
                                        {policySections.map((section, index) => (
                                            <Accordion.Item
                                                key={index}
                                                eventKey={String(index)}
                                                className="border-0 mb-3 shadow-sm"
                                            >
                                                <Accordion.Header className="bg-light">
                                                    <h5 className="mb-0">
                                                        <Badge bg="primary" className="me-2">{index + 1}</Badge>
                                                        {section.title}
                                                    </h5>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    {section.content}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>

                                    <div className="alert alert-info mt-5">
                                        <div className="d-flex">
                                            <i className="bi bi-info-circle-fill fs-3 me-3 text-primary"></i>
                                            <div>
                                                <h5 className="alert-heading">Besoin d'aide ?</h5>
                                                <p className="mb-0">
                                                    Pour toute question concernant notre politique de confidentialité,
                                                    contactez notre délégué à la protection des données à l'adresse
                                                    <strong> contact@beamtel.ma</strong>.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>

                                <Card.Footer className="bg-light text-muted small py-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</span>
                                        <span>Version 1.0</span>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
            <div>
                <Footer/>
            </div>
        </div>

    );
};

export default PrivacyPolicy;