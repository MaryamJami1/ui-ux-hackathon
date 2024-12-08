import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer/Footer";

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
      <NavBar />
        {children}
        <Footer/>
        </body>

    </html>
  )
}
