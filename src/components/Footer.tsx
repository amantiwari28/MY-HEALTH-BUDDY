import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-secondary/50 py-10">
    <div className="container mx-auto px-4 text-center space-y-3">
      <div className="flex items-center justify-center gap-2">
        <Heart className="h-5 w-5 text-primary fill-primary" />
        <span className="font-heading text-lg">My Health Buddy</span>
      </div>
      <p className="text-sm text-muted-foreground">Your personal health companion. Always consult a doctor for medical advice.</p>
      <div className="flex justify-center gap-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
        <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
      </div>
      <p className="text-xs text-muted-foreground">© 2026 My Health Buddy. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
