import React, { useState } from 'react';
import md5 from 'crypto-js/md5'; 

const CORRECT_PASSWORD_HASHES = [
    '709a922ce81c73e2549800a2b1d7ee09',
    'bb4399287a367c4e36bb69dd864d103c',
];
// ======================================================

export default function LoginOverlay({ onLoginSuccess }) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Mã hóa mật khẩu người dùng vừa nhập bằng MD5
        const enteredPasswordHash = md5(password).toString();

        // 2. Kiểm tra xem mật khẩu đã mã hóa có nằm trong danh sách hợp lệ không
        if (CORRECT_PASSWORD_HASHES.includes(enteredPasswordHash)) {
            setError('');
            onLoginSuccess(); // Đăng nhập thành công
        } else {
            setError('Mật khẩu không chính xác.');
        }
    };

    return (
        <div className="loginOverlay">
            <div className="loginBox">
                <h2>Yêu cầu truy cập</h2>
                <p>Vui lòng nhập mật khẩu để tiếp tục.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoFocus /* Tự động trỏ vào ô mật khẩu */
                    />
                    {error && <p className="loginError">{error}</p>}
                    <button type="submit">Truy cập</button>
                </form>
                <p className="footer-text">© TruongIT.NET</p>
            </div>
        </div>
    );
}
