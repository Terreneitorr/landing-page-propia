import { profile } from "@/lib/data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {profile.name} © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
