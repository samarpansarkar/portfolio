import React, { useState } from 'react';
import api from '../../api/axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const { resetToken } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        try {
            const { data } = await api.put(`/auth/resetpassword/${resetToken}`, { password });
            setMessage(data.data);
            setError('');
            setTimeout(() => {
                navigate('/admin/login');
            }, 3000);
        } catch (err) {
            setError(err.response.data.message || 'Error resetting password');
            setMessage('');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Reset Password</h2>
                {message && <div className="bg-green-500 text-white p-2 rounded mb-4">{message}</div>}
                {error && <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-slate-300 mb-2">New Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-accent-primary outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-slate-300 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-accent-primary outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-accent-primary text-white rounded hover:bg-accent-primary/90 transition-colors"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
