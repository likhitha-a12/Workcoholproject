// app/components/NavbarWrapper.jsx

'use client';

import Navbar from './Navbar';
import { useEffect, useState } from 'react';

export default function NavbarWrapper() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser.username);
    }
  }, []);

  return <Navbar user={user} setUser={setUser} />;
}
