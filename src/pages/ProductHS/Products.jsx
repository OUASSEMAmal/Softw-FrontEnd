
import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaServer } from 'react-icons/fa';
import Header from "../../components/home/jsx/header";
import NavBar from "../../components/home/jsx/navbar";
import Footer from "../../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        {
            name: "Hardware Products",
            icon: <FaServer />,
            items: [
                { name: "FIREWALL", displayName: "Firewall", categoryId: 0 },
                { name: "ROUTER", displayName: "Router", categoryId: 4 },
                { name: "SWITCH", displayName: "Switch", categoryId: 3 },
                { name: "ACCESS_POINT", displayName: "Access Point", categoryId: 2 },
                { name: "WIRELESS NETWORKS", displayName: "Wireless Networks", categoryId:9}
            ],
            key: "hardware"
        },
        {
            name: "Software Solutions",
            icon: <FaShieldAlt />,
            items: [
                { name: "EDR", displayName: "EDR", categoryId: 5 },
                { name: "XDR", displayName: "XDR", categoryId: 6 },
                { name: "MDR", displayName: "MDR", categoryId: 7 },
                { name: "SOC", displayName: "SOC", categoryId: 8 }
            ],
            key: "software"
        }
    ];

    // Fetch all products on component mount
    useEffect(() => {
        fetchProducts();
    }, []);

    // Filter products when selectedCategory changes
    useEffect(() => {
        if (selectedCategory === null) {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.categoryId === selectedCategory);
            console.log(products);
            setFilteredProducts(filtered);
        }
    }, [selectedCategory, products]);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8079/api/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(Array.isArray(data) ? data : []);
            setFilteredProducts(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching products:', error);
            setProducts([]);
            setFilteredProducts([]);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryClick = (item) => {
        setLoading(true);
        setSelectedCategory(item.categoryId);
        // Simulate loading delay for better UX
        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    return (
        <div className="products-page">
            <Header />
            <NavBar />
            <div className="products-container">
                <h1 className="main-header">Categories</h1>
                <h3 className="mt-1">
                    Contact <a href="mailto:sales@softwaretich.ma" className="email-link">sales@softwaretich.ma</a> for price
                </h3>

                <div className="content-grid">
                    <div className="categories-column">
                        {categories.map((category, index) => (
                            <div key={`cat-${index}`} className="category-section">
                                <h2 className="category-title">
                                    {category.icon}
                                    {category.name}
                                </h2>
                                <ul className="category-list">
                                    {category.items.map((item, i) => (
                                        <li
                                            key={`item-${index}-${i}`}
                                            className={`category-item ${
                                                selectedCategory === item.categoryId ? 'active' : ''
                                            }`}
                                            onClick={() => handleCategoryClick(item)}
                                        >
                                            {item.displayName}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="products-column">
                        {loading ? (
                            <div className="loading-message">Loading products...</div>
                        ) : filteredProducts.length === 0 ? (
                            <div className="no-products-message">No products found in this category</div>
                        ) : (
                            <div className="products-grid">
                                {filteredProducts.map((product, index) => (
                                    <ProductCard key={`prod-${index}`} product={product} index={index} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer style={{ marginTop: 200 }} />
        </div>
    );
};

const ProductCard = ({ product, index }) => {
    const badgeColor = getBadgeColor(product.type);
    const borderColor = getBorderColor(product.type);

    return (
        <div className="product-card" style={{ borderTopColor: borderColor }}>
            {product.photo ? (
                <div className="product-image-container">
                    <img
                        src={`data:image/jpeg;base64,${product.photo}`}
                        alt={product.nom}
                        className="product-image"
                        style={{ height: '200px', objectFit: 'contain', background: '#f9f9f9' }}
                    />
                </div>
            ) : (
                <div className="product-image-container">
                    <div
                        className="product-image-placeholder"
                        style={{ height: '200px' }}
                    >
                        <span className="text-muted">No image</span>
                    </div>
                </div>
            )}

            <div className="product-badge" style={{ backgroundColor: badgeColor }}>
                {index % 4 === 0 ? product.nom :
                    index % 4 === 1 ? product.nom :
                        index % 4 === 2 ? product.nom :
                            product.nom}
            </div>

            <p className="product-details">{product.details }</p>

            <div className="product-info">
                <span className="brand-model">{product.brand } - {product.model_name }</span>
                {product.special_feat && <span className="special-feat">Feature: {product.special_feat}</span>}
                {product.antenna_type && <span className="antenna-type">Antenna: {product.antenna_type}</span>}
            </div>
        </div>
    );
};

const getBadgeColor = (type) => {
    if (!type) return '#1abc9c';
    return type.includes('HARDWARE') ? '#2ecc71' : '#3498db';
};

const getBorderColor = (type) => {
    if (!type) return '#1abc9c';
    return type.includes('SOFTWARE') ? '#27ae60' : '#2980b9';
};

export default Products;














/*
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products= () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8079/api/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="container py-5">
            <h2 className="mb-4 fw-bold">All Products</h2>
            <div className="row g-4">
                {products.map((product, index) => (
                    <div className="col-md-6 col-lg-4" key={index}>
                        <div className="card shadow-sm position-relative border-0 h-100">

                            {/!* Top Badge *!/}
                            <span className={`position-absolute top-0 end-0 badge m-2 text-white ${
                                index % 4 === 0 ? 'bg-primary' :
                                    index % 4 === 1 ? 'bg-success' :
                                        index % 4 === 2 ? 'bg-info' : 'bg-danger'
                            }`}>
                {index % 4 === 0 ? 'Recommended' :
                    index % 4 === 1 ? 'Free delivery' :
                        index % 4 === 2 ? 'Sophos-Router' : '-30%'}
              </span>

                            {/!* Product Image *!/}
                            {product.photo ? (
                                <img
                                    src={`data:image/jpeg;base64,${product.photo}`}
                                    alt={product.nom}
                                    className="card-img-top"
                                    style={{ height: '200px', objectFit: 'contain', background: '#f9f9f9' }}
                                />
                            ) : (
                                <div
                                    className="card-img-top d-flex align-items-center justify-content-center bg-light"
                                    style={{ height: '200px' }}
                                >
                                    <span className="text-muted">No image</span>
                                </div>
                            )}

                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title fw-semibold">{product.nom}</h5>
                                <h6 className="text-danger fw-bold">{(product.price || 0).toLocaleString()} MAD</h6>

                                <ul className="list-unstyled small mt-3">
                                    <li><strong>Details:</strong> {product.details || '—'}</li>
                                    <li><strong>Partner:</strong> {product.partner || '—'}</li>
                                    <li><strong>Category ID:</strong> {product.categoryId}</li>
                                    <li><strong>Brand:</strong> {product.brand || '—'}</li>
                                    <li><strong>Model:</strong> {product.model_name || '—'}</li>
                                    <li><strong>Feature:</strong> {product.special_feat || '—'}</li>
                                    <li><strong>Antenna:</strong> {product.antenna_type || '—'}</li>
                                </ul>

                                <div className="mt-auto d-flex justify-content-between align-items-center small text-muted">
                                    <span className="text-success">+{(Math.random() * 2).toFixed(2)}%</span>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Products;*/






















/*import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaServer } from 'react-icons/fa';
import './Products.css';
import Header from "../../components/home/jsx/header";
import NavBar from "../../components/home/jsx/navbar";
import Footer from "../../components/Footer";
import {getAllProducts} from "../../services/productService";

const Products = () => {
    const [activeFilter, setActiveFilter] = useState({ type: 'all', categoryId: null });
    const [productsData, setProductsData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Catégories avec leurs IDs correspondants
    const categories = [
        {
            name: "Hardware Products",
            icon: <FaServer />,
            items: [
                { name: "FIREWALL", displayName: "Firewall", categoryId: 0 },
                { name: "ROUTER", displayName: "Router", categoryId: 4 },
                { name: "SWITCH", displayName: "Switch", categoryId: 3 },
                { name: "ACCESS_POINT", displayName: "Access Point", categoryId: 2 }
            ],
            key: "hardware"
        },
        {
            name: "Software Solutions",
            icon: <FaShieldAlt />,
            items: [
                { name: "EDR", displayName: "EDR", categoryId: 5 },
                { name: "XDR", displayName: "XDR", categoryId: 6 },
                { name: "MDR", displayName: "MDR", categoryId: 7 },
                { name: "SOC", displayName: "SOC", categoryId: 8 }
            ],
            key: "software"
        }
    ];

    // Runs only once on mount
    useEffect(() => {
        fetchAllProducts();
    }, []);

    //Runs when productsData or activeFilter changes
    useEffect(() => {
        let filtered = [...productsData];

        if (activeFilter.type !== 'all') {
            filtered = filtered.filter(product =>
                product.type === activeFilter.type
            );
        }

        // Filtrage supplémentaire par categoryId
        if (activeFilter.categoryId !== null) {
            filtered = filtered.filter(product =>
                product.categoryId === activeFilter.categoryId
            );
        }

        setFilteredProducts(filtered);
    }, [productsData, activeFilter]);




    const fetchAllProducts = async () => {
        setLoading(true);
        try {

            const data = await getAllProducts();
            setProductsData(data);
        } catch (error) {
            console.error('Fetch error:', error);
            alert(`Erreur de connexion: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };



    const filterProducts = () => {

    };

    const handleCategoryClick = (item) => {
        setActiveFilter({
            type: item.name,
            categoryId: item.categoryId
        });
    };

    return (
        <div className="products-page">
            <Header />
            <NavBar />
            <div className="products-container">
                <h1 className="main-header">Categories</h1>

                <div className="content-grid">
                    <div className="categories-column">
                        {categories.map((category, index) => (
                            <div key={`cat-${index}`} className="category-section">
                                <h2 className="category-title">
                                    {category.icon}
                                    {category.name}
                                </h2>
                                <ul className="category-list">
                                    {category.items.map((item, i) => (
                                        <li
                                            key={`item-${index}-${i}`}
                                            className={`category-item ${
                                                activeFilter.type === item.name ? 'active' : ''
                                            }`}
                                            onClick={() => handleCategoryClick(item)}
                                        >
                                            {item.displayName}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="products-column">
                        {loading ? (
                            <div className="loading-message">Loading products...</div>
                        ) : filteredProducts.length === 0 ? (
                            <div className="no-products-message">No products found in this category</div>
                        ) : (
                            <div className="products-grid">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={`prod-${product.id}`} product={product} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer style={{ marginTop: 200 }} />
        </div>
    );
};

const ProductCard = ({ product }) => {
    const badgeColor = getBadgeColor(product.type);
    const borderColor = getBorderColor(product.type);

    return (
        <div className="product-card" style={{ borderTopColor: borderColor }}>
            {product.photo && (
                <div className="product-image-container">
                    <img
                        src={`data:image/jpeg;base64,${arrayBufferToBase64(product.photo)}`}
                        alt={product.nom}
                        className="product-image"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/placeholder-product.png';
                        }}
                    />
                </div>
            )}

            <div className="product-badge" style={{ backgroundColor: badgeColor }}>
                {product.type.split('_').join(' ')}
            </div>

            <h3 className="product-name">{product.nom}</h3>
            <p className="product-details">{product.details}</p>
            <div className="product-info">
                <span className="brand-model">{product.brand} - {product.model_name}</span>
                {product.special_feat && <span className="special-feat">Feature: {product.special_feat}</span>}
                {product.antenna_type && <span className="antenna-type">Antenna: {product.antenna_type}</span>}
            </div>
        </div>
    );
};

// Helper pour convertir ArrayBuffer en base64
const arrayBufferToBase64 = (buffer) => {
    if (!buffer) return '';
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
};

const getBadgeColor = (type) => {
    if (!type) return '#1abc9c';
    return type.includes('HARDWARE') ? '#2ecc71' : '#3498db';
};

const getBorderColor = (type) => {
    if (!type) return '#1abc9c';
    return type.includes('SOFTWARE') ? '#27ae60' : '#2980b9';
};

export default Products;*/
































/*import React, { useState } from 'react';
import { FaShieldAlt, FaServer, FaWifi, FaBoxOpen, FaTruck, FaFire, FaNetworkWired } from 'react-icons/fa';
import './Products.css';
import Header from "../../components/home/jsx/header";
import NavBar from "../../components/home/jsx/navbar";
import Footer from "../../components/Footer";
import XGS3100 from "../../assets/Product/hardware/xgs3100.jpg";
import xgs2100 from "../../assets/Product/hardware/xg2100.jpg";
import firepower1010 from "../../assets/Product/hardware/firepower1010.jpg";
import FG40F from "../../assets/Product/hardware/FG-40F.png";
import mx84 from "../../assets/Product/hardware/mx84.jpg";
import fortirouter401e from "../../assets/Product/hardware/fortirouter401e.png";
import rv340 from "../../assets/Product/hardware/rv340.jpg";
import red20 from "../../assets/Product/hardware/red20.jpg";
import fortirouter60d from "../../assets/Product/hardware/fortirouter60d.jpg";
import isr4331 from "../../assets/Product/hardware/isr4331.jpg";
import xgs87 from "../../assets/Product/hardware/xgs87.jpg";
import catalyst2960x from "../../assets/Product/hardware/catalyst2960x.jpg";
import fortiswitch148f from "../../assets/Product/hardware/fortiswitch148f.jpg";
import cs11024 from "../../assets/Product/hardware/cs110-24.jpg";
import sg35028 from "../../assets/Product/hardware/sg350-28.jpg";
import fortiswitch124e from "../../assets/Product/hardware/fortiswitch124e.png";
import cs21048p from "../../assets/Product/hardware/cs210-48p.jpg";
import aironet1832i from "../../assets/Product/hardware/aironet1832i.jpg";
import fortiap231f from "../../assets/Product/hardware/fortiap231f.png";
import apx320 from "../../assets/Product/hardware/apx320.png";
import mr36 from "../../assets/Product/hardware/mr36.jpg";
import fortiap421ev from "../../assets/Product/hardware/fortiap421e.png";
import ap6420 from "../../assets/Product/hardware/ap6420.png";
import merakiZ3 from "../../assets/Product/hardware/meraki-z3.jpg";
import fortiextender201e from "../../assets/Product/hardware/fortiextender-201e.png";
import red60 from "../../assets/Product/hardware/red60.jpg";
import merakiGoGR12 from "../../assets/Product/hardware/meraki-go-gr12.jpg";
import fortiap321c from "../../assets/Product/hardware/fortiap321c.png";
import apx530 from "../../assets/Product/hardware/apx530.jpg";
import soc from "../../assets/Product/software/soc.jpg";
import mdr from "../../assets/Product/software/mdr.png";
import xdr from "../../assets/Product/software/xdr.png";
import crowdstrike from "../../assets/Product/software/crowdstrike.png";
import sopedr from "../../assets/Product/software/sopedr.png";
import foredr from "../../assets/Product/software/foredr.png";
import edrcic from "../../assets/Product/software/edrcic.png";
import fortiSOC from "../../assets/Product/software/fortiSOC.png";
import Cxdr from "../../assets/Product/software/Cxdr.png";
import ciscoxdr from "../../assets/Product/software/ciscoxdr .png";
import FortiMdr from "../../assets/Product/software/FortiMdr.png";
import mdrFL from "../../assets/Product/software/mdrFL.png";
import trendXDR from "../../assets/Product/software/trendXDR.png";
import crowSOC from "../../assets/Product/software/crowSOC.png";


const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categoryMap = {
        'Firewalls': 'firewalls',
        'Routers': 'routers',
        'Switches': 'switches',
        'Access Points': 'access-point',
        'Wireless Networks': 'wireless',
        'EDR': 'edr',
        'XDR': 'xdr',
        'MDR': 'mdr',
        'SOC': 'soc'
    };

    const categories = [
        {
            name: "Hardware Products",
            icon: <FaServer />,
            items: ["Firewalls", "Routers", "Switches", "Access Points", "Wireless Networks"],
            key: "hardware"
        },
        {
            name: "Software Solutions",
            icon: <FaShieldAlt />,
            items: ["EDR", "XDR", "MDR", "SOC"],
            key: "software"
        }
    ];

    const productsData = [
        // Hardware Products
        {
            id: 1,
            name: "Sophos XGS3100",
            categoryId: 0,
            category: "Hardware",
            details: "Advanced Firewall",
            brand: "Sophos",
            photo: XGS3100,
            prix: "",
            categoryKey: "firewalls"
        },
        {
            id: 3,
            name: "Sophos XGS2100",
            categoryId: 0,
            category: "Hardware",
            details: "High-Performance Enterprise Firewall",
            brand: "Sophos",
            photo: xgs2100,
            prix: "",
            categoryKey: "firewalls"
        },
        {
            id: 4,
            name: "Cisco Firepower 1010",
            categoryId: 0,
            category: "Hardware",
            details: "NGFW with integrated threat defense",
            brand: "Cisco",
            photo: firepower1010,
            prix: "",
            categoryKey: "firewalls"
        },
        {
            id: 5,
            name: "Fortinet FortiGate FG-40F",
            categoryId: 0,
            category: "Hardware",
            details: "Secure SD-WAN and Firewall",
            brand: "Fortinet",
            photo: FG40F,
            prix: "",
            categoryKey: "firewalls"
        },
        {
            id: 6,
            name: "Cisco Meraki MX84",
            categoryId: 0,
            category: "Hardware",
            details: "Cloud-managed security appliance",
            brand: "Cisco",
            photo: mx84,
            prix: "",
            categoryKey: "firewalls"
        },
        {
            id:7,
            name: "Fortinet FortiRouter 401E",
            categoryId: 4,
            category: "Hardware",
            details: "High-Performance Secure Router",
            brand: "Fortinet",
            photo: fortirouter401e,
            prix: "",
            categoryKey: "routers"
        },
        {
            id:8,
            name: "Cisco RV340",
            categoryId: 4,
            category: "Hardware",
            details: "Dual WAN Gigabit VPN Router",
            brand: "Cisco",
            photo: rv340,
            prix: "",
            categoryKey: "routers"
        },
        {
            id:9,
            name: "Sophos RED 20",
            categoryId: 4,
            category: "Hardware",
            details: "Remote Ethernet Device Router",
            brand: "Sophos",
            photo:red20,
            prix: "",
            categoryKey: "routers"
        },
        {
            id:10,
            name: "Fortinet FortiRouter 60D",
            categoryId: 4,
            category: "Hardware",
            details: "Secure Branch Connectivity Router",
            brand: "Fortinet",
            photo: fortirouter60d,
            prix: "",
            categoryKey: "routers"
        },
        {
            id: 11,
            name: "Cisco ISR 4331",
            categoryId: 4,
            category: "Hardware",
            details: "Integrated Services Router",
            brand: "Cisco",
            photo: isr4331,
            prix: "",
            categoryKey: "routers"
        },
        {
            id: 12,
            name: "Sophos XGS 87",
            categoryId: 4,
            category: "Hardware",
            details: "Router with Next-Gen Firewall Capabilities",
            brand: "Sophos",
            photo: xgs87,
            prix: "",
            categoryKey: "routers"
        },
        {
            id: 13,
            name: "Cisco Catalyst 2960-X",
            categoryId: 3,
            category: "Hardware",
            details: "Gigabit Ethernet Switch with Layer 2/3 features",
            brand: "Cisco",
            photo: catalyst2960x,
            prix: "",
            categoryKey: "switches"
        },
        {
            id: 14,
            name: "Fortinet FortiSwitch 148F",
            categoryId: 3,
            category: "Hardware",
            details: "Managed Switch with Secure Access",
            brand: "Fortinet",
            photo: fortiswitch148f,
            prix: "",
            categoryKey: "switches"
        },
        {
            id: 15,
            name: "Sophos CS110-24",
            categoryId: 3,
            category: "Hardware",
            details: "Cloud-managed Layer 2 Access Switch",
            brand: "Sophos",
            photo: cs11024,
            prix: "",
            categoryKey: "switches"
        },
        {
            id: 16,
            name: "Cisco SG350-28",
            categoryId: 3,
            category: "Hardware",
            details: "28-Port Gigabit Managed Switch",
            brand: "Cisco",
            photo: sg35028,
            prix: "",
            categoryKey: "switches"
        },
        {
            id: 17,
            name: "Fortinet FortiSwitch 124E",
            categoryId: 3,
            category: "Hardware",
            details: "Secure and Scalable Ethernet Switch",
            brand: "Fortinet",
            photo: fortiswitch124e,
            prix: "",
            categoryKey: "switches"
        },
        {
            id: 18,
            name: "Sophos CS210-48P",
            categoryId: 3,
            category: "Hardware",
            details: "48-Port PoE Cloud-Managed Switch",
            brand: "Sophos",
            photo: cs21048p,
            prix: "",
            categoryKey: "switches"
        },
        {
            id: 19,
            name: "Cisco Aironet 1832i",
            categoryId: 5,
            category: "Hardware",
            details: "Dual-Band 802.11ac Wave 2 Access Point",
            brand: "Cisco",
            photo:aironet1832i,
            prix: "",
            categoryKey: "access-point"
        },
        {
            id: 20,
            name: "Fortinet FortiAP 231F",
            categoryId: 5,
            category: "Hardware",
            details: "WiFi 6 Indoor Access Point",
            brand: "Fortinet",
            photo: fortiap231f,
            prix: "",
            categoryKey: "access-point"
        },
        {
            id: 21,
            name: "Sophos APX 320",
            categoryId: 5,
            category: "Hardware",
            details: "Cloud-managed Dual-Radio Access Point",
            brand: "Sophos",
            photo: apx320,
            prix: "",
            categoryKey: "access-point"
        },
        {
            id: 22,
            name: "Cisco Meraki MR36",
            categoryId: 5,
            category: "Hardware",
            details: "Cloud-managed WiFi 6 Access Point",
            brand: "Cisco",
            photo: mr36,
            prix: "",
            categoryKey: "access-point"
        },
        {
            id: 23,
            name: "Fortinet FortiAP U421EV",
            categoryId: 5,
            category: "Hardware",
            details: "Outdoor Dual-Band Access Point",
            brand: "Fortinet",
            photo: fortiap421ev ,
            prix: "",
            categoryKey: "access-point"
        },
        {
            id: 24,
            name: "Sophos AP6 420",
            categoryId: 5,
            category: "Hardware",
            details: "Next-gen WiFi 6 Access Point",
            brand: "Sophos",
            photo: ap6420 ,
            prix: "",
            categoryKey: "access-point"
        },
        {
            id: 25,
            name: "Cisco Meraki Z3",
            categoryId: 7,
            category: "Hardware",
            details: "Teleworker Wireless Gateway",
            brand: "Cisco",
            photo: merakiZ3 ,
            prix: "",
            categoryKey: "wireless"
        },
        {
            id: 26,
            name: "Fortinet FortiExtender 201E",
            categoryId: 7,
            category: "Hardware",
            details: "4G LTE Wireless WAN Extender",
            brand: "Fortinet",
            photo: fortiextender201e ,
            prix: "",
            categoryKey: "wireless"
        },
        {
            id: 27,
            name: "Sophos RED 60",
            categoryId: 7,
            category: "Hardware",
            details: "Remote Ethernet Device with wireless support",
            brand: "Sophos",
            photo: red60,
            prix: "",
            categoryKey: "wireless"
        },
        {
            id: 28,
            name: "Cisco Meraki Go GR12",
            categoryId: 7,
            category: "Hardware",
            details: "Indoor Wireless Access Point with Cloud Management",
            brand: "Cisco",
            photo: merakiGoGR12 ,
            prix: "",
            categoryKey: "wireless"
        },
        {
            id: 29,
            name: "Fortinet FortiAP 321C",
            categoryId: 7,
            category: "Hardware",
            details: "Wireless Access Point with Integrated Controller",
            brand: "Fortinet",
            photo: fortiap321c ,
            prix: "",
            categoryKey: "wireless"
        },
        {
            id: 30,
            name: "Sophos APX 530",
            categoryId: 7,
            category: "Hardware",
            details: "High-performance Wireless Network Device",
            brand: "Sophos",
            photo: apx530 ,
            prix: "",
            categoryKey: "wireless"
        },

        // Software Products
        {
            id: 31,
            name: "SOC Elite",
            categoryId: 8,
            category: "Software",
            details: "Security Operations Center",
            brand: "BrandG",
            photo: soc,
            prix: "",
            categoryKey: "soc"
        },
        {
            id: 38,
            name: "FortiAnalyzer-FortiSOC",
            categoryId: 8,
            category: "Software",
            details: "AI-powered Analytics and Automation",
            brand: "Fortinet",
            photo: fortiSOC,
            prix: "",
            categoryKey: "soc"
        },

        {
            id: 44,
            name: "CrowdStrike Cybersecurity 101",
            categoryId: 8,
            category: "Software",
            details: "Security Operations Center (SOC) Solution",
            brand: "CrowdStrike",
            photo: crowSOC,
            prix: " ",
            categoryKey: "soc"
        },

        {
            id: 41,
            name: "FortiMDR",
            categoryId: 10,
            category: "Software",
            details: "Managed Detection and Response",
            brand: "Fortinet",
            photo: FortiMdr,
            prix: "",
            categoryKey: "mdr"
        },

        {
            id: 42,
            name: " CrowdStrikeMDR",
            categoryId: 10,
            category: "Software",
            details: "Managed Detection and Response (Falcon Complete Next-Gen MDR)",
            brand: "CrowdStrike",
            photo: mdrFL,
            prix: "",
            categoryKey: "mdr"
        },

        {
            id: 32,
            name: "MDR Shield",
            categoryId: 10,
            category: "Software",
            details: "Managed Detection & Response",
            brand: "BrandH",
            photo: mdr,
            prix: "",
            categoryKey: "mdr"
        },
        {
            id: 33,
            name: "XDR Defender",
            categoryId: 10,
            category: "Software",
            details: "Extended Detection & Response",
            brand: "BrandI",
            photo: xdr,
            prix: " ",
            categoryKey: "xdr"
        },

        {
            id: 43,
            name: "Trend Micro Vision One™",
            categoryId: 10,
            category: "Software",
            details: "Extended Detection & Response (XDR) Security Platform",
            brand: "Trend Micro",
            photo: trendXDR,
            prix: " ",
            categoryKey: "xdr"
        },

        {
            id: 39,
            name: "Falcon XDR",
            categoryId: 10,
            category: "Software",
            details: "CrowdXDR Alliance",
            brand: "CrowdStrike",
            photo: Cxdr,
            prix: "",
            categoryKey: "xdr"
        },
        {
            id: 40,
            name: "Cisco XDR",
            categoryId: 10,
            category: "Software",
            details: "Extended Detection and Response",
            brand: "Cisco",
            photo: ciscoxdr,
            prix: "",
            categoryKey: "xdr"
        },
        {
            id: 34,
            name: "EDR CrowdStrike",
            categoryId: 11,
            category: "Software",
            details: "Endpoint Detection & Response",
            brand: "BrandJ",
            photo: crowdstrike,
            prix: "",
            categoryKey: "edr"
        },
        {
            id: 35,
            name: "Sophos Intercept X for Server",
            categoryId: 11,
            category: "Software",
            details: "Advanced server protection with EDR",
            brand: "Sophos",
            photo: sopedr,
            prix: "",
            categoryKey: "edr"
        },
        {
            id: 36,
            name: "Fortinet EDR",
            categoryId: 11,
            category: "Software",
            details: "Endpoint Detection and Response solution",
            brand: "Fortinet",
            photo: foredr,
            prix: "",
            categoryKey: "edr"
        },
        {
            id: 37,
            name: "Cisco Secure Endpoint",
            categoryId: 11,
            category: "Software",
            details: "Cloud-native endpoint security platform",
            brand: "Cisco",
            photo: edrcic,
            prix: "",
            categoryKey: "edr"
        }
    ];

    const filteredProducts = activeCategory === 'all'
        ? productsData
        : productsData.filter(p => p.categoryKey === activeCategory);

    const handleCategoryClick = (item) => {
        setActiveCategory(categoryMap[item] || 'all');
    };

    return (
        <div className="products-page">
            <Header />
            <NavBar />
            <div className="products-container">
                <h1 className="main-header">Categories</h1>
                <h3 className="mt-1">
                    Contact <a href="mailto:sales@softwaretich.ma" className="email-link">sales@softwaretich.ma</a> for price
                </h3>

                <div className="content-grid">
                    <div className="categories-column">
                        {categories.map((category, index) => (
                            <div key={`cat-${index}`} className="category-section">
                                <h2 className="category-title">
                                    {category.icon}
                                    {category.name}
                                </h2>
                                <ul className="category-list">
                                    {category.items.map((item, i) => (
                                        <li
                                            key={`item-${index}-${i}`}
                                            className={`category-item ${activeCategory === categoryMap[item] ? 'active' : ''}`}
                                            onClick={() => handleCategoryClick(item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="products-column">
                        {filteredProducts.length === 0 ? (
                            <div className="no-products-message">No products found in this category</div>
                        ) : (
                            <div className="products-grid">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={`prod-${product.id}`} product={product} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer style={{ marginTop: 200 }} />
        </div>
    );
};

const ProductCard = ({ product }) => {
    const badgeColor = getBadgeColor(product.name);
    const borderColor = getBorderColor(product.details);

    const renderPriceInfo = () => {
        if (product.prix && product.prix.includes('@')) {
            return (
                <span className="price-info">
                    Contact <a href={`mailto:sales@softwaretich.ma`} className="email-link">
                        sales@softwaretich.ma
                    </a> for price
                </span>
            );
        }
        return <span className="price-info">{product.prix || ""}</span>;
    };

    return (
        <div className="product-card" style={{ borderTopColor: borderColor }}>
            {product.photo && (
                <div className="product-image-container">
                    <img
                        src={product.photo}
                        alt={product.name}
                        className="product-image"
                    />
                </div>
            )}

            <div className="product-badge" style={{ backgroundColor: badgeColor }}>
                {product.name}
            </div>

            <h3 className="product-name">{product.name}</h3>

            <h3 className="product-name">{product.details}</h3>

            {renderPriceInfo()}
        </div>
    );
};

const getBadgeColor = (name) => '#1abc9c';
const getBorderColor = (name) => '#1abc9c';

export default Products;*/