import React, { useState } from 'react';
import md5 from 'crypto-js/md5'; // <-- Import thư viện mã hóa
import users from '@site/src/data/users.json'; // <-- Import file danh sách người dùng

export default function LoginOverlay({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Mã hóa mật khẩu người dùng vừa nhập bằng MD5
        const enteredPasswordHash = md5(password).toString();

        // 2. Tìm người dùng trong file JSON
        const foundUser = users.find(
            (user) => user.username === username && user.passwordHash === enteredPasswordHash
        );

        // 3. Kiểm tra kết quả
        if (foundUser) {
            setError('');
            onLoginSuccess(); // Đăng nhập thành công
        } else {
            setError('Tên đăng nhập hoặc mật khẩu không chính xác.');
        }
    };

    return (
        <div className="loginOverlay">
            <div className="loginBox">
                <h2>Đăng nhập</h2>
                <p>Vui lòng nhập thông tin để truy cập kho tài nguyên.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Tên đăng nhập"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="loginError">{error}</p>}
                    <button type="submit">Truy cập</button>
                </form>
                <p className="footer-text">© TruongIT.NET</p>
            </div>
        </div>
    );
}
