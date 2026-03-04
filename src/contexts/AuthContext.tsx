import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: { email: string; name: string } | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("healthbuddy_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const signup = (name: string, email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("healthbuddy_users") || "[]");
    if (users.find((u: any) => u.email === email)) return false;
    users.push({ name, email, password });
    localStorage.setItem("healthbuddy_users", JSON.stringify(users));
    const u = { email, name };
    setUser(u);
    localStorage.setItem("healthbuddy_user", JSON.stringify(u));
    return true;
  };

  const login = (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("healthbuddy_users") || "[]");
    const found = users.find((u: any) => u.email === email && u.password === password);
    if (!found) return false;
    const u = { email: found.email, name: found.name };
    setUser(u);
    localStorage.setItem("healthbuddy_user", JSON.stringify(u));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("healthbuddy_user");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
