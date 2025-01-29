// ProtectedRoute.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import AmazonInternship from './AmazonInternship';
import './passwordprotect.css';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const correctPassword = 'selina2024'; // Set your desired password here

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    return (
        <div>
            {!isAuthenticated ? (
                <div className="password-form">
                    <h2 style={{marginTop: '1%', marginBottom: '3%'}}> Have the password?</h2>
                    <form onSubmit={handlePasswordSubmit}>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Password"
                        />
                        <button type="submit">Show me the details!</button>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            ) : (
                <Component {...rest} />
            )}
        </div>
    );
};

export default ProtectedRoute;
