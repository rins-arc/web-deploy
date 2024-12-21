import { ReactNode } from 'react';
import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/navbar';
import Footer from './components/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import WhatsAppIcon from './components/WhatsAppIcon';

export const metadata: Metadata = {
  title: "Rins Architect",
  description: "Generated by create next app",
};


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
    <html> 
      <body>
      <WhatsAppIcon />
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>

      </body>

    </html>
    </>
  );
};

export default Layout;