import { ShieldCheck, Droplets, Dumbbell, Moon, Brain, Leaf } from "lucide-react";

const precautions = [
  { icon: Droplets, title: "Stay Hydrated", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=200&fit=crop", tips: ["Drink at least 8 glasses of water daily", "Increase intake during summer or exercise", "Avoid excessive caffeine and sugary drinks", "Carry a water bottle wherever you go"] },
  { icon: Dumbbell, title: "Regular Exercise", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=200&fit=crop", tips: ["At least 30 minutes of moderate exercise daily", "Include a mix of cardio and strength training", "Stretch before and after workouts", "Start slow if you're a beginner"] },
  { icon: Moon, title: "Adequate Sleep", image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=200&fit=crop", tips: ["7-9 hours of sleep per night for adults", "Maintain a consistent sleep schedule", "Avoid screens 1 hour before bed", "Keep bedroom dark and cool"] },
  { icon: Leaf, title: "Balanced Nutrition", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=200&fit=crop", tips: ["Eat a variety of fruits and vegetables", "Limit processed foods and added sugars", "Include whole grains and lean proteins", "Practice portion control"] },
  { icon: Brain, title: "Mental Health", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=200&fit=crop", tips: ["Practice mindfulness or meditation", "Take breaks from work regularly", "Talk to someone if you feel overwhelmed", "Limit social media consumption"] },
  { icon: ShieldCheck, title: "Preventive Care", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=200&fit=crop", tips: ["Get regular health check-ups", "Keep vaccinations up to date", "Practice good hand hygiene", "Wear sunscreen when going outdoors"] },
];

const Precautions = () => (
  <div className="min-h-screen py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-heading mb-4">Health Precautions</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">Simple daily measures for a healthier, happier life.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {precautions.map((p, i) => (
          <div key={i} className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-shadow group">
            <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg hero-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                  <p.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl">{p.title}</h3>
              </div>
              <ul className="space-y-2">
                {p.tips.map((tip, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Precautions;
