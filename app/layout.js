import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./Navigation";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
