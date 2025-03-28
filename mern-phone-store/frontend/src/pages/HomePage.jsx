import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState();
  console.log(products);
  

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }

    // Fetch product data from MongoDB via API
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [navigate]);

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="logo">Thế Giới Manh Động</Link>
        <ul className="nav-links">
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/products">Sản phẩm</Link></li>
          <li><Link to="/contact">Liên hệ</Link></li>
          <li>
            <button 
              className="logout-btn"
              onClick={() => {
                localStorage.removeItem("isAuthenticated");
                navigate("/login");
              }}
            >
              Đăng xuất
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Chào mừng đến với Thế Giới Manh Động</h1>
        <p>Khám phá những sản phẩm công nghệ mới nhất với giá tốt nhất!</p>
        <Link to="/products" className="btn">Xem ngay</Link>
      </header>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Sản phẩm nổi bật</h2>
        <div className="product-list grid__homepage">
          {products?.length > 0 ? (
            products?.map((product) => (
              <div className="product-card" key={product._id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Giá: {product.price.toLocaleString()} VND</p>
                <Link to={`/products/${product._id}`} className="btn">Mua ngay</Link>
              </div>
            ))
          ) : (
            <p>Đang tải sản phẩm...</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Thế Giới Manh Động</h3>
            <p>Chuyên cung cấp các sản phẩm công nghệ chính hãng, giá tốt nhất.</p>
          </div>
          <div className="footer-section">
            <h3>Liên hệ</h3>
            <p>Email: support@thegioimanhdong.com</p>
            <p>Hotline: 1800 1234</p>
            <p>Địa chỉ: 69/68 Đ. Đặng Thuỳ Trâm, Bình Thạnh, Hồ Chí Minh</p>
          </div>
          <div className="footer-section">
            <h3>Kết nối với chúng tôi</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/image/fb.png" alt="Facebook" className="social-icon" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/image/ig.png" alt="Instagram" className="social-icon" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="/image/yt.png" alt="YouTube" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <p className="footer-bottom">&copy; 2025 Thế Giới Manh Động</p>
      </footer>
    </div>
  );
}

export default HomePage;