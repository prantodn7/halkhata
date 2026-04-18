import React, { useEffect, useState } from 'react';
import { supabase } from '../../config/supabaseClient.js';

const Debug = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        refreshSession();
    }, []);

    const refreshSession = async () => {
        // Force refresh to get latest metadata
        await supabase.auth.refreshSession();
        const { data: { session } } = await supabase.auth.getSession();
        setUserInfo(session?.user);
    };

    const makeMeAdmin = async () => {
        setLoading(true);
        setMessage('');
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setMessage('No user found. Please login first.');
                setLoading(false);
                return;
            }

            // Update user metadata with admin role
            const { error } = await supabase.auth.updateUser({
                data: { role: 'admin' }
            });

            if (error) {
                setMessage('Error: ' + error.message);
            } else {
                setMessage('Success! You are now admin. Please logout and login again.');
                // Refresh session to see updated metadata
                await refreshSession();
            }
        } catch (err) {
            setMessage('Error: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.assign('/login');
    };

    return (
        <div className='min-h-screen bg-gray-100 p-8'>
            <div className='max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6'>
                <h1 className='text-2xl font-bold mb-4'>Debug Info</h1>
                {userInfo ? (
                    <div className='space-y-4'>
                        <div>
                            <strong>Email:</strong> {userInfo.email}
                        </div>
                        <div>
                            <strong>ID:</strong> {userInfo.id}
                        </div>
                        <div>
                            <strong>User Metadata:</strong>
                            <pre className='bg-gray-100 p-4 rounded mt-2 overflow-auto text-xs'>
                                {JSON.stringify(userInfo.user_metadata || {}, null, 2)}
                            </pre>
                        </div>
                        <div>
                            <strong>App Metadata:</strong>
                            <pre className='bg-gray-100 p-4 rounded mt-2 overflow-auto text-xs'>
                                {JSON.stringify(userInfo.app_metadata || {}, null, 2)}
                            </pre>
                        </div>
                        <div>
                            <strong>Is Admin:</strong>{' '}
                            <span className={
                                userInfo.user_metadata?.role === 'admin' || userInfo.user_metadata?.isAdmin === true ||
                                userInfo.app_metadata?.role === 'admin' || userInfo.app_metadata?.isAdmin === true
                                    ? 'text-green-600 font-bold'
                                    : 'text-red-600 font-bold'
                            }>
                                {userInfo.user_metadata?.role === 'admin' || userInfo.user_metadata?.isAdmin === true ||
                                userInfo.app_metadata?.role === 'admin' || userInfo.app_metadata?.isAdmin === true
                                    ? 'YES ✓'
                                    : 'NO ✗'}
                            </span>
                        </div>

                        {message && (
                            <div className={`p-3 rounded ${message.includes('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                {message}
                            </div>
                        )}

                        <div className='flex gap-3'>
                            <button
                                onClick={makeMeAdmin}
                                disabled={loading}
                                className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg disabled:opacity-50'
                            >
                                {loading ? 'Processing...' : 'Make Me Admin'}
                            </button>
                            <button
                                onClick={refreshSession}
                                className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg'
                            >
                                Refresh
                            </button>
                            <button
                                onClick={handleLogout}
                                className='bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg'
                            >
                                Logout
                            </button>
                        </div>

                        <div className='mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded text-sm'>
                            <p className='font-semibold mb-2'>Instructions:</p>
                            <ol className='list-decimal list-inside space-y-1'>
                                <li>Click "Make Me Admin" button</li>
                                <li>Click "Logout" button</li>
                                <li>Login again</li>
                                <li>Admin Panel button should appear in navbar</li>
                            </ol>
                        </div>
                    </div>
                ) : (
                    <p>Loading or not logged in...</p>
                )}
            </div>
        </div>
    );
};

export default Debug;
