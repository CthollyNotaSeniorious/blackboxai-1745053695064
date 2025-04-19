'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);

  useEffect(() => {
    // Fetch user session info from API or NextAuth session
    // Placeholder: simulate logged in user
    // Replace with real session fetching logic
    setUser({ name: 'John Doe', role: 'ADMIN' });
  }, []);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-lg">
        Simple Store
      </Link>
      <div>
        {!user ? (
          <Link href="/login" className="px-3 py-1 border rounded hover:bg-gray-700">
            Login
          </Link>
        ) : (
          <>
            <span className="mr-4">Hello, {user.name}</span>
            {user.role === 'ADMIN' && (
              <Link href="/admin" className="mr-4 hover:underline">
                Dashboard Admin
              </Link>
            )}
            <button className="px-3 py-1 border rounded hover:bg-gray-700">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
