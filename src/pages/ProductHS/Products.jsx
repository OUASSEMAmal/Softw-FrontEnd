import React, { useState } from 'react';
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
                    Contact <a href="mailto:sales@beamtel.ma" className="email-link">sales@beamtel.ma</a> for price
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
                    Contact <a href={`mailto:sales@beamtel.ma`} className="email-link">
                        sales@beamtel.ma
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

export default Products;






















/** import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaServer, FaWifi, FaBoxOpen, FaTruck, FaFire, FaNetworkWired } from 'react-icons/fa';
import './Products.css';
import Header from "../../components/home/jsx/header";
import NavBar from "../../components/home/jsx/navbar";
import Footer from "../../components/Footer";

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [productsData, setProductsData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const baseUrl = process.env.REACT_APP_API_URL;
    const apiUrl = `${baseUrl}/products`;

    const categories = [
        {
            name: "Hardware Products",
            icon: <FaServer />,
            items: ["Firewalls", "Routers", "Switchs", "Access Point", "Wireless Networks"],
            key: "hardware"
        },
        {
            name: "Software Solutions",
            icon: <FaShieldAlt />,
            items: ["EDR", "XDR", "MDR", "SOC"],
            key: "software"
        }
    ];

    useEffect(() => {
        fetchAllProducts();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [activeCategory, productsData]);

    const fetchAllProducts = () => {
        setLoading(true);
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setProductsData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    };

    const fetchProductsByCategory = (categoryId) => {
        setLoading(true);
        fetch(`${baseUrl}/products/category/${categoryId}`)
            .then((res) => res.json())
            .then((data) => {
                setProductsData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(`Error fetching category ${categoryId}:`, err);
                setLoading(false);
            });
    };

    const filterProducts = () => {
        if (activeCategory === 'all') {
            setFilteredProducts(productsData);
            return;
        }

        const categoryMap = {
            'firewalls': 0,
            'routers': 4,
            'switchs': 5,
            'access-point': 6,
            'wireless': 7,
            'edr': 8,
            'xdr': 9,
            'mdr': 10,
            'soc': 11
        };

        const categoryId = categoryMap[activeCategory];

        const filtered = productsData.filter(product =>
            product.categoryId=== categoryId
        );

        setFilteredProducts(filtered);
    };

    const handleCategoryClick = (item) => {
        const categoryMap = {
            'Firewalls': { key: 'firewalls', categoryId: 0 },
            'Routers': { key: 'routers', categoryId: 4 },
            'Switchs': { key: 'switchs', categoryId: 5 },
            'Access Point': { key: 'access-point', categoryId: 6 },
            'Wireless Networks': { key: 'wireless', categoryId: 7 },
            'EDR': { key: 'edr', categoryId: 8 },
            'XDR': { key: 'xdr', categoryId: 9 },
            'MDR': { key: 'mdr', categoryId: 10 },
            'SOC': { key: 'soc', categoryId: 11 }
        };

        const category = categoryMap[item] || { key: item.toLowerCase(), id: null };
        setActiveCategory(category.key);

        // Pour filtrer côté serveur au lieu de côté client:
        // fetchProductsByCategory(category.id);
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
                                    {category.details}
                                </h2>
                                <ul className="category-list">
                                    {category.items.map((item, i) => (
                                        <li
                                            key={`item-${index}-${i}`}
                                            className={`category-item ${activeCategory === (item.toLowerCase()) ? 'active' : ''}`}
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
    const badgeColor = getBadgeColor(product.name);
    const borderColor = getBorderColor(product.details);

    return (
        <div className="product-card" style={{ borderTopColor: borderColor }}>
            {product.photo && (
                <div className="product-image-container">
                    <img
                        src={`data:image/jpeg;base64,${product.photo}`}
                        alt={product.name}
                        className="product-image"
                    />
                </div>
            )}

            <div className="product-badge" style={{ backgroundColor: badgeColor }}>
                {product.nom}
            </div>

            <h3 className="product-name">{product.name}</h3>

            <div className="product-price">{product.prix} €</div>
            <h3 className="product-name">{product.details}</h3>
            <div className="product-info">
                <span className="stock-info">{product.brand}</span>
            </div>
        </div>
    );
};

const getBadgeColor = (name) => '#1abc9c';
const getBorderColor = (name) => '#1abc9c';

export default Products;*/