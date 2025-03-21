import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "123") {
      localStorage.setItem("isAuthenticated", "true"); // Lưu trạng thái đăng nhập
      navigate("/"); // Chuyển hướng đến HomePage
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div className="login-page">
      <h2>Đăng nhập vào Thế Giới Manh Động</h2>
      <input
        type="text"
        placeholder="Tên đăng nhập"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default LoginPage;
