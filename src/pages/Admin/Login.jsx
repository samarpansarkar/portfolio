import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../api/axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/auth/login', { username, password });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate('/admin/dashboard');
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h2>
                {error && <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-slate-300 mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-accent-primary outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-slate-300 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-accent-primary outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-accent-primary text-white rounded hover:bg-accent-primary/90 transition-colors"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 flex justify-between text-sm">
                    <Link to="/admin/forgot-password" className="text-slate-400 hover:text-accent-primary transition-colors">
                        Forgot Password?
                    </Link>
                    <Link to="/admin/forgot-username" className="text-slate-400 hover:text-accent-primary transition-colors">
                        Forgot Username?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
