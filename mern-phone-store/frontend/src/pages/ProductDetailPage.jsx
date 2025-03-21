import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ProductDetailPage.css";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "30,000,000 VND",
    image: "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-gold-thumbnew-600x600.jpg",
    description: "iPhone 15 Pro với khung viền titan nhẹ, hiệu năng mạnh mẽ với chip A17 Pro và camera 48MP chuyên nghiệp.",
  },

  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: "25,000,000 VND",
    image: "https://didongmango.com/images/products/2024/03/25/resized/s23_1711421983.jpg",
    description: "Samsung Galaxy S23 với màn hình Dynamic AMOLED 120Hz, thiết kế cao cấp và camera chụp đêm chuyên nghiệp.",
  },

  {
    id: 3,
    name: "Google Pixel 8",
    price: "22,000,000 VND",
    image: "https://www.didongmy.com/vnt_upload/product/10_2023/thumbs/(600x600)_google_pixel_8_5g_hazel_didongmy_thumb_600x600.jpg",
    description: "Google Pixel 8 với camera AI thông minh, hiệu năng mạnh mẽ và cập nhật Android trực tiếp từ Google.",
  },

  {
    id: 4,
    name: "Vivo X200 Pro",
    price: "18,000,000 VND",
    image: "https://viostore.vn/wp-content/uploads/2024/10/4-9.png",
    description: "Vivo X200 Pro với thiết kế sang trọng, camera chống rung quang học và sạc siêu nhanh.",
  },

  {
    id: 5,
    name: "Xiaomi Note 13 Pro",
    price: "14,000,000 VND",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-note-13-pro-4g_12__1.png",
    description: "Xiaomi Redmi Note 13 Pro mang đến màn hình 120Hz, pin khủng và chip Snapdragon mạnh mẽ.",
  },

  {
    id: 6,
    name: "Oppo Reno12 F",
    price: "13,000,000 VND",
    image: "https://www.didongmy.com/vnt_upload/product/08_2024/thumbs/(600x600)_oppo_reno12_f_256gb_didongmy_thumb_600x600_1.jpg",
    description: "Oppo Reno12 F với thiết kế thời trang, màn hình 120Hz và camera selfie AI siêu nét.",
  },

  {
    id: 7,
    name: "Samsung Z Flip6",
    price: "35,000,000 VND",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-flip-6-xanh-la-6_2_1.png",
    description: "Samsung Galaxy Z Flip6 với thiết kế gập độc đáo, màn hình AMOLED siêu bền và camera Flex Mode.",
  },

  {
    id: 8,
    name: "iPhone 16 Pro Max",
    price: "29,000,000 VND",
    image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-black-thumbnew-600x600.jpg",
    description: "iPhone 16 Pro Max nâng cấp camera, thời lượng pin trâu và màn hình Always-On Display.",
  },

  {
    id: 9,
    name: "Samsung S25 Ultra",
    price: "34,000,000 VND",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-ultra_2__3.png",
    brand: "Samsung",
    description: "Samsung Galaxy S25 Ultra mang đến trải nghiệm camera 200MP, chip Snapdragon 8 Gen 4 mạnh mẽ và màn hình 2K Dynamic AMOLED.",
  },

  {
    id: 10,
    name: "Xiaomi 15 Ultra 5G",
    price: "19,000,000 VND",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-15-ultra.png",
    brand: "Xiaomi",
    description: "Xiaomi 15 Ultra 5G với camera Leica, chip Snapdragon 8 Gen 3 và thiết kế cao cấp.",
  }
];

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Đã thêm vào giỏ hàng!");
  };

  const buyNow = () => {
    alert(`Bạn đã mua: ${product.name}`);
  };

  if (!product) {
    return <h2 className="not-found">Sản phẩm không tồn tại</h2>;
  }

  return (
    <div>
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
      
      {/* Product Details */}
      <div className="product-detail-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">Giá: {product.price}</p>
          <p className="description">
            <b>Thông tin sản phẩm:</b><br />
            {product.description}
          </p>
          <div className="buttons">
            <button className="buy-now" onClick={buyNow}>Mua ngay</button>
            <button className="add-to-cart" onClick={addToCart}>Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
      
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
            <p>Địa chỉ: 69/68 Đ. Đặng Thuỳ Trâm, Phường 13, Bình Thạnh, Hồ Chí Minh</p>
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
