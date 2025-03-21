import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login"); // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
    }
  }, [navigate]);

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Thế Giới Manh Động</div>
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
        <div className="product-list">
          <div className="product-card">
            <img src="https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-gold-thumbnew-600x600.jpg" alt="Product" />
            <h3>iPhone 15 Pro</h3>
            <p>Giá: 30,000,000 VND</p>
            <Link to="/products/1" className="btn">Mua ngay</Link>
          </div>
          <div className="product-card">
            <img src="https://didongmango.com/images/products/2024/03/25/resized/s23_1711421983.jpg" alt="Product" />
            <h3>Samsung Galaxy S23</h3>
            <p>Giá: 25,000,000 VND</p>
            <Link to="/products/2" className="btn">Mua ngay</Link>
          </div>
          <div className="product-card">
            <img src="https://www.didongmy.com/vnt_upload/product/10_2023/thumbs/(600x600)_google_pixel_8_5g_hazel_didongmy_thumb_600x600.jpg" alt="Product" />
            <h3>Google Pixel 8</h3>
            <p>Giá: 22,000,000 VND</p>
            <Link to="/products/3" className="btn">Mua ngay</Link>
          </div>
          <div className="product-card">
            <img src="https://viostore.vn/wp-content/uploads/2024/10/4-9.png" alt="Product" />
            <h3>Vivo X200 Pro</h3>
            <p>Giá: 18,000,000 VND</p>
            <Link to="/products/4" className="btn">Mua ngay</Link>
          </div>
          <div className="product-card">
            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-note-13-pro-4g_12__1.png" alt="Product" />
            <h3>Xiaomi Note 13 Pro</h3>
            <p>Giá: 14,000,000 VND</p>
            <Link to="/products/5" className="btn">Mua ngay</Link>
          </div>
        </div>
      </section>
      {/* Footer */}
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

export default HomePage;
