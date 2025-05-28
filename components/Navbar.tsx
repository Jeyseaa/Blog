// components/Navbar.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function Navbar() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <nav style={{ marginBottom: 20, padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <a href="/blogs" style={{ marginRight: 15 }}>Blogs</a>

      {!user ? (
        <>
          <a href="/register" style={{ marginRight: 15 }}>Register</a>
          <a href="/login" style={{ marginRight: 15 }}>Login</a>
        </>
      ) : (
        <>
          <span style={{ marginRight: 15 }}>Hello, {user.name}</span>
          <a href="/logout">Logout</a>
        </>
      )}
    </nav>
  );
}
