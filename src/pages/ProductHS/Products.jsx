import React, { useState, useEffect } from 'react';
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

export default Products;