
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-3xl m-auto">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
