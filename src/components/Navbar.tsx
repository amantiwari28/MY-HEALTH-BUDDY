import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const publicLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Our Services" },
    { to: "/contact", label: "Contact" },
  ];

  const protectedLinks = [
    { to: "/diet", label: "Diet Plan" },
    { to: "/medicine", label: "Medicine" },
    { to: "/consult-doctor", label: "Consult Doctor" },
    { to: "/nearby-hospitals", label: "Nearby Hospitals" },
    { to: "/symptoms", label: "Symptom Checker" },
  ];

  const allLinks = isAuthenticated ? [...publicLinks, ...protectedLinks] : publicLinks;

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-7 w-7 text-primary fill-primary" />
          <span className="text-xl font-heading font-bold text-foreground">My Health Buddy</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-5">
          {allLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 rounded ${
                location.pathname === link.to ? "text-primary bg-primary/5" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-muted-foreground">Hi, {user?.name}</span>
              <Button variant="outline" size="sm" onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Link to="/login"><Button variant="ghost" size="sm">Sign In</Button></Link>
              <Link to="/signup"><Button size="sm">Sign Up</Button></Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-card px-4 pb-4 space-y-2">
          {allLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t space-y-2">
            {isAuthenticated ? (
              <Button variant="outline" size="sm" className="w-full" onClick={() => { logout(); setMobileOpen(false); }}>Logout</Button>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileOpen(false)}><Button variant="ghost" size="sm" className="w-full">Sign In</Button></Link>
                <Link to="/signup" onClick={() => setMobileOpen(false)}><Button size="sm" className="w-full">Sign Up</Button></Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
