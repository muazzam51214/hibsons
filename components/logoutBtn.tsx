'use client';

import React from 'react';
import { useAuthStore } from '@/store/authStore'; // adjust the import path if needed

const LogoutBtn = () => {
  const clearUser = useAuthStore((state) => state.clearUser);

  const handleLogout = () => {
    clearUser();
    // Optional: redirect to login or home page
    window.location.href = '/login'; // or '/'
  };

  return (
    <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">
      Logout
    </button>
  );
};

export default LogoutBtn;
