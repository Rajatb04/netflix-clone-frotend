import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if a token is present in localStorage
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      router.push('/login');
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900">
      <Link href="/">
        <h1 className="text-white text-2xl font-bold">Netflix Clone</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <Link href="/favourites">
              <a className="text-white mr-4">Favourites</a>
            </Link>
            <button onClick={handleLogout} className="text-white">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login">
              <a className="text-white mr-4">Login</a>
            </Link>
            <Link href="/signup">
              <a className="text-white">Signup</a>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
