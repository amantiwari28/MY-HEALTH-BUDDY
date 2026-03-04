import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-heading mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Have questions? Reach out and we'll get back to you.</p>
        </div>

        {/* Banner */}
        <div className="mb-12 max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&h=300&fit=crop"
            alt="Healthcare support"
            className="w-full h-[240px] object-cover rounded-2xl card-shadow"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="msg">Message</Label>
              <Textarea id="msg" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <Button type="submit" className="w-full" size="lg">Send Message</Button>
          </form>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-heading text-lg">Email</h3>
                <p className="text-muted-foreground text-sm">support@myhealthbuddy.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-heading text-lg">Phone</h3>
                <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-heading text-lg">Address</h3>
                <p className="text-muted-foreground text-sm">123 Health Street, Wellness City</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
