import React, { useState } from 'react';
import api from '../../api/axios';
import { Link } from 'react-router-dom';

const ForgotUsername = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/auth/forgotusername', { email });
            setMessage(data.data);
            setError('');
        } catch (err) {
            setError(err.response.data.message || 'Error sending email');
            setMessage('');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Forgot Username</h2>
                {message && <div className="bg-green-500 text-white p-2 rounded mb-4">{message}</div>}
                {error && <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-slate-300 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-accent-primary outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-accent-primary text-white rounded hover:bg-accent-primary/90 transition-colors"
                    >
                        Recover Username
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link to="/admin/login" className="text-accent-primary hover:underline">Back to Login</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotUsername;
