import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      toast({ title: "Welcome back!", description: "You've signed in successfully." });
      navigate("/diet");
    } else {
      toast({ title: "Error", description: "Invalid email or password.", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl w-full items-center">
        {/* Image side */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&h=600&fit=crop"
            alt="Healthcare"
            className="rounded-2xl card-shadow object-cover w-full h-[500px]"
          />
        </div>
        {/* Form side */}
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-8">
            <Heart className="h-10 w-10 text-primary fill-primary mx-auto mb-3" />
            <h1 className="text-3xl font-heading">Welcome Back</h1>
            <p className="text-muted-foreground mt-1">Sign in to your Health Buddy account</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 card-shadow space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
            </div>
            <Button type="submit" className="w-full" size="lg">Sign In</Button>
            <p className="text-sm text-center text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline font-medium">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
