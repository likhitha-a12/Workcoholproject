
'use client';


import Link from 'next/link';

export default function Navbar({ user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/login'; // redirect after logout
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="text-purple-700 text-2xl font-bold">
          Events
        </Link>
        <ul className="flex ml-6 space-x-4">
          <li>
            <Link href="/" className=" text-gray-800 text-lg hover:text-pink-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className=" text-gray-800 text-lg hover:text-pink-600">
              About
            </Link>
          </li>
          {!user && (
              <li>
                 <Link href="/WorkGallery" className=" text-gray-800 text-lg hover:text-pink-600">
                     WorkGallery
                </Link>
              </li>
          )}

          
          <li>
            <Link href="/contact" className=" text-gray-800 text-lg hover:text-pink-600">
              Contact
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link href="/events" className=" text-gray-800 text-lg hover:text-pink-600">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/booking" className=" text-gray-800 text-lg hover:text-pink-600">
                  Booking
                </Link>
              </li>
            </>
          )}
           
        </ul>
      </div>

      <div>
        {user ? (
          <div className="flex items-center space-x-4">
            <button onClick={handleLogout} className="text-lg text-gray-800 hover:text-red-600">
              <span className="fas fa-sign-out-alt mr-1"></span> LogOut
            </button>
            <span className="text-pink-600 font-bold text-lg">{user}</span>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link href="/register" className="text-lg text-gray-800 hover:text-green-600">
              <span className="fas fa-user mr-1"></span> Sign Up
            </Link>
            <Link href="/login" className="text-lg text-gray-800 hover:text-blue-600">
              <span className="fas fa-sign-in-alt mr-1"></span> Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
