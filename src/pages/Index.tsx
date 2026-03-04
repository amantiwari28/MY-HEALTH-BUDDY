import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Apple, Pill, ShieldCheck, Stethoscope, ArrowRight, Activity, Users } from "lucide-react";

const features = [
  { icon: Apple, title: "Personalized Diet Plans", desc: "Get diet recommendations based on your symptoms and health goals." },
  { icon: Pill, title: "Medicine Guidance", desc: "Find medicines for common symptoms with doctor consultation reminders." },
  { icon: ShieldCheck, title: "Precautions & Measures", desc: "Learn preventive measures for a healthier lifestyle." },
  { icon: Stethoscope, title: "AI Health Chatbot", desc: "Ask our Watson-powered chatbot any health or diet questions." },
];

const stats = [
  { value: "10K+", label: "Active Users", icon: Users },
  { value: "500+", label: "Health Tips", icon: Heart },
  { value: "50+", label: "Conditions Covered", icon: Activity },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient py-24 md:py-36 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Heart className="h-4 w-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">Your Health Companion</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-primary-foreground mb-6 leading-tight">
                My Health Buddy
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 max-w-lg mb-10">
                Your trusted guide for diet plans, medicines, precautions and health advice — all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" variant="secondary" className="text-base px-8 gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=500&fit=crop"
                alt="Doctor with stethoscope"
                className="rounded-2xl shadow-2xl object-cover w-full h-[420px]"
              />
            </div>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-foreground/5" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-primary-foreground/5" />
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <s.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-3xl font-heading text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-4">How We Help You</h2>
          <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
            Sign up to unlock personalized health tools designed for your wellbeing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 group">
                <div className="h-12 w-12 rounded-lg hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=450&fit=crop"
              alt="Healthy lifestyle"
              className="rounded-2xl card-shadow object-cover w-full h-[350px]"
            />
            <div>
              <h2 className="text-3xl font-heading mb-4">Your Health, Our Priority</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                My Health Buddy combines AI-powered health insights with curated medical knowledge to help you make informed decisions about your wellbeing.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From personalized diet plans to symptom checking and nearby hospital discovery — we've got you covered.
              </p>
              <Link to="/symptoms">
                <Button size="lg" className="gap-2">
                  Check Symptoms <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-heading mb-4 text-primary-foreground">Ready to Take Control of Your Health?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Join My Health Buddy today and access personalized diet plans, medicine guidance, and our AI chatbot.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary" className="px-10 gap-2">
              Sign Up Free <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
