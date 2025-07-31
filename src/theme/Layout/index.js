import React, { useState, useEffect } from 'react';
import Layout from '@theme-original/Layout';
import LoginOverlay from '@site/src/components/LoginOverlay';

export default function LayoutWrapper(props) {
    // State để kiểm tra xem người dùng đã đăng nhập chưa
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Kiểm tra sessionStorage khi component được tải
        // sessionStorage sẽ bị xóa khi đóng tab trình duyệt
        const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLoginSuccess = () => {
        // Lưu trạng thái đăng nhập vào sessionStorage
        sessionStorage.setItem('isLoggedIn', 'true');
        setIsAuthenticated(true);
    };

    // Nếu chưa đăng nhập, hiển thị màn hình Login
    if (!isAuthenticated) {
        return <LoginOverlay onLoginSuccess={handleLoginSuccess} />;
    }

    // Nếu đã đăng nhập, hiển thị nội dung trang web
    return (
        <>
            <Layout {...props} />
        </>
    );
}
