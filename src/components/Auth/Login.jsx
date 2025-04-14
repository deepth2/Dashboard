import React, { useState } from "react";
import '../Style/Login.css';

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        setEmail("");
        setPassword("");
    };

    return (
        <div className='login-container'>
            <div className='login-box'>
                <h2 className="login-title">Login To Your Dashboard</h2>
                <form onSubmit={submitHandler} className="login-form">
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input mt-5"
                        type="password"
                        placeholder="Enter password"
                    />
                    <button className="login-button mt-5">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
