import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { profile } from "@/lib/data/profile";

export const metadata = {
  title: `${profile.name} — Portfolio & DevBlog`,
  description: profile.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
