import React from 'react';
import { Container, Row, Col, Card, ListGroup, Accordion, Badge } from 'react-bootstrap';
import Navbar from './home/jsx/navbar';
import Header from './home/jsx/header';
import Footer from './Footer';
import './terms-of-service.css';

const TermsOfService = () => {
    const termsSections = [
        {
            title: "Acceptation des conditions",
            content: (
                <>
                    <p>En utilisant notre site web BEAMTEL.ma, vous acceptez pleinement et sans réserve les présentes conditions d'utilisation.</p>
                    <ListGroup variant="flush" className="small">
                        {[
                            { icon: "bi bi-check-circle", text: "Vous devez avoir au moins 18 ans" },
                            { icon: "bi bi-check-circle", text: "Vous acceptez nos règles de conduite" },
                            { icon: "bi bi-check-circle", text: "Vous reconnaissez notre propriété intellectuelle" }
                        ].map((item, index) => (
                            <ListGroup.Item key={index} className="d-flex align-items-center">
                                <i className={`${item.icon} text-primary me-2`}></i>
                                {item.text}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </>
            )
        },
        {
            title: "Comptes utilisateurs",
            content: "Vous êtes responsable de maintenir la confidentialité de votre compte et mot de passe. Vous acceptez de ne pas partager vos identifiants et de nous informer immédiatement de toute utilisation non autorisée."
        },
        {
            title: "Propriété intellectuelle",
            content: "Tous les contenus, logos, designs et autres éléments visuels de BEAMTEL.ma sont notre propriété exclusive ou celle de nos concédants de licence. Toute reproduction sans autorisation écrite est strictement interdite."
        },
        {
            title: "Limitations de responsabilité",
            content: "Nous ne serons pas responsables des dommages indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser nos services."
        },
        {
            title: "Paiements et facturation",
            content: (
                <>
                    <p>Les services payants sont soumis aux conditions suivantes :</p>
                    <ListGroup variant="flush">
                        {[
                            "Paiement requis à la commande",
                            "Pas de remboursement après livraison du service",
                            "Factures disponibles dans votre espace client"
                        ].map((item, index) => (
                            <ListGroup.Item key={index} className="d-flex">
                                <i className="bi bi-credit-card text-primary me-2 mt-1"></i>
                                {item}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </>
            )
        },
        {
            title: "Résiliation",
            content: "Nous nous réservons le droit de résilier ou suspendre votre accès à nos services sans préavis en cas de violation des présentes conditions."
        },
        {
            title: "Modifications des conditions",
            content: "Nous pouvons modifier ces conditions à tout moment. Les modifications prendront effet immédiatement après leur publication sur cette page."
        },
        {
            title: "Loi applicable",
            content: "Ces conditions sont régies par les lois marocaines. Tout litige relatif à leur interprétation ou exécution sera de la compétence exclusive des tribunaux de Rabat."
        }
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <Navbar />

            <main className="flex-grow-1 terms-of-service-page">
                <Container className="my-5">
                    <Row className="justify-content-center">
                        <Col lg={10} xl={8}>
                            <Card className="shadow-lg border-0">
                                <Card.Header className="bg-primary text-white py-4">
                                    <h1 className="text-center mb-0">
                                        <i className="bi bi-file-earmark-text me-2"></i>
                                        Conditions Générales d'Utilisation
                                    </h1>
                                </Card.Header>

                                <Card.Body className="p-4 p-md-5">
                                    <div className="text-center mb-5">
                                        <p className="lead text-muted">
                                            Les présentes conditions régissent l'utilisation du site <strong className="text-primary">BEAMTEL.ma</strong>.
                                            Veuillez les lire attentivement avant d'utiliser nos services.
                                        </p>
                                    </div>

                                    <Accordion defaultActiveKey="0" flush className="mb-4">
                                        {termsSections.map((section, index) => (
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

                                    <div className="alert alert-warning mt-5">
                                        <div className="d-flex">
                                            <i className="bi bi-exclamation-triangle-fill fs-3 me-3 text-warning"></i>
                                            <div>
                                                <h5 className="alert-heading">Avertissement important</h5>
                                                <p className="mb-0">
                                                    En cas de non-respect de ces conditions, nous nous réservons le droit de restreindre
                                                    votre accès à nos services. Pour toute question, contactez-nous à{" "}
                                                    <strong>contact@beamtel.ma</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>

                                <Card.Footer className="bg-light text-muted small py-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span>Entrée en vigueur : {new Date().toLocaleDateString('fr-FR')}</span>
                                        <span>Version 1.0</span>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
            <div> <Footer /> </div>

        </div>
    );
};

export default TermsOfService;