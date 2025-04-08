import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeToggleButton from "../components/ThemeToggleButton";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div id="top">{children}</div>
        <Footer />
        <ThemeToggleButton />
      </body>
    </html>
  );
}
