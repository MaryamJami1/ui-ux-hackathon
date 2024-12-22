import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer/Footer";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ToastContainer ke liye styles

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Ui Ux Hackathon",
  description: "by maryam jamil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <NavBar />
          {children}
          <Footer />

          {/* Add ToastContainer here */}
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar
            closeButton={false}
            className="z-50 mt-12"
          />
        </CartProvider>
      </body>
    </html>
  );
}
