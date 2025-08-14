import React, { useState, useEffect } from 'react';
import Layout from '@theme-original/Layout';
import LoginOverlay from '@site/src/components/LoginOverlay';

export default function LayoutWrapper(props) {
    // Use three states: 'checking', 'authenticated', 'unauthenticated'
    const [authState, setAuthState] = useState('checking');

    useEffect(() => {
        // Kiểm tra sessionStorage khi component được tải
        // sessionStorage sẽ bị xóa khi đóng tab trình duyệt
        const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            setAuthState('authenticated');
        } else {
            setAuthState('unauthenticated');
        }
    }, []);

    const handleLoginSuccess = () => {
        // Lưu trạng thái đăng nhập vào sessionStorage
        sessionStorage.setItem('isLoggedIn', 'true');
        setAuthState('authenticated');
    };

    // While checking, render nothing to prevent the login screen from flashing.
    if (authState === 'checking') {
        return null;
    }

    if (authState === 'unauthenticated') {
        return <LoginOverlay onLoginSuccess={handleLoginSuccess} />;
    }

    // authState === 'authenticated'
    return <Layout {...props} />;
}
