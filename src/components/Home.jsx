import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/login');
    };
    return (
        <div>
            <h1>Home</h1>
            <button 
            onClick={handleLogout}
            style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
                Log Out
            </button>
        </div>
    )
}