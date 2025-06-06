// app/layout.js

import './globals.css';
import BootstrapProvider from './components/common/BootstrapProvider';
import NavbarWrapper from './components/common/NavbarWrapper';


export const metadata = {
  title: 'Event Management',
  description: 'Your event partner',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BootstrapProvider />
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
