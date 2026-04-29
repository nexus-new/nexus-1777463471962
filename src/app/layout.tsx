import { useState } from 'react';
import { useClient } from '../hooks/useClient';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  const supabase = useClient();

  return (
    <html lang="uz" className={darkMode ? 'dark' : ''}>
      <head>
        <title>Soat Soatdigon</title>
        <meta name="description" content="Soat Soatdigon sayti" />
      </head>
      <body className="bg-white dark:bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}