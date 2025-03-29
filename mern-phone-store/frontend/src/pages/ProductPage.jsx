// ProductPage.jsx
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import axios from "axios"

function ProductPage() {
  const [products, setProducts] = useState()
  console.log(products);
  
  
  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data)
    }).catch((err) => {
      console.log(err);
    });
  }, [])
  return (
    <div className="product-page">
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
      <h1 className="title">DANH SÁCH SẢN PHẨM</h1>
      <div className="product-grid">
        {products?.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/products/${product._id}`} className="btn">Xem chi tiết</Link>
          </div>
        ))}
      </div>
      <footer className="footer">
        <div className="footer-container">
          {/* Cột 1: Giới thiệu */}
          <div className="footer-section">
            <h3>Thế Giới Manh Động</h3>
            <p>Chuyên cung cấp các sản phẩm công nghệ chính hãng, giá tốt nhất.</p>
          </div>

          {/* Cột 2: Liên hệ */}
          <div className="footer-section">
            <h3>Liên hệ</h3>
            <p>Email: support@thegioimanhdong.com</p>
            <p>Hotline: 1800 1234</p>
            <p>Địa chỉ: 69/68 Đ. Đặng Thuỳ Trâm, Phường 13, Bình Thạnh, Hồ Chí Minh</p>
          </div>
          {/* Cột 3: Mạng xã hội */}
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

export default ProductPage;