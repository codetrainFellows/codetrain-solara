"use client";

import "./globals.css";

// Components
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@material-tailwind/react";
import { theme } from "@/theme/theme";

const metadata = {
  title: "Codetrain Solara | Fun and Easy Programming Courses for Children",
  description:
    "Learn to code with fun and interactive lessons for kids! Our platform offers engaging programming courses to help children build games, websites, and more.",
  keywords: ["web development"],
};

// Load the local font
const helvetica = localFont({
  src: "../fonts/Helvetica.ttf",
});

export default function RootLayout({ children }) {
  return (
    <ThemeProvider value={theme}>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        <body className={helvetica.className}>
          <Nav />
          <main className="overflow-hidden">{children}</main>
          <Footer />
          <GoogleAnalytics gaId="G-NBBEY5JY8J" />
        </body>
      </html>
    </ThemeProvider>
  );
}
