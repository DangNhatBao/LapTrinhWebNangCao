import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetailPage.css";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  console.log(product);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi tải sản phẩm:", error);
        setError("Không tìm thấy sản phẩm");
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    if (product) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Đã thêm vào giỏ hàng!");
    }
  };

  const buyNow = () => {
    if (product) {
      alert(`Bạn đã mua: ${product.name}`);
    }
  };

  if (loading) return <h2>Đang tải sản phẩm...</h2>;
  if (error) return <h2 className="not-found">{error}</h2>;

  return (
    <div>
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
      
      <div className="product-detail-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">Giá: {product.price} VND</p>
          <p className="description"><b>Thông tin sản phẩm:</b> <br />{product.description}</p>
          <div className="buttons">
            <button className="buy-now" onClick={buyNow}>Mua ngay</button>
            <button className="add-to-cart" onClick={addToCart}>Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
      
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
            <p>Địa chỉ: 69/68 Đ. Đặng Thuỳ Trâm, P.13, Bình Thạnh, HCM</p>
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

export default ProductDetailPage;
