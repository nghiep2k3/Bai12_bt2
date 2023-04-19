import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    function handleLogin() {
        setIsLoggedIn(true);
        navigate('/');
    }
    return (
        <div>
            <div>
                <form>
                <input 
                type="text" 
                placeholder="Tài khoản" 
                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '10px', fontSize: '16px' }} 
                />
                <input 
                type="password" 
                placeholder="Mật khẩu" 
                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '10px', fontSize: '16px' }} 
                />
                <button 
                type="submit" 
                onClick={handleLogin} 
                style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
                    Đăng nhập
                </button>

                </form>
            </div>
        </div>
    )
}