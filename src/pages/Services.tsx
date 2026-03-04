import { Apple, Pill, ShieldCheck, Stethoscope, MessageCircle, Activity, MapPin, Phone } from "lucide-react";

const services = [
  { icon: Apple, title: "Personalized Diet Plans", desc: "Receive tailored diet plans based on your symptoms, goals, and dietary preferences." },
  { icon: Pill, title: "Medicine Suggestions", desc: "Get medicine recommendations for common symptoms. Always consult a doctor before taking any medication." },
  { icon: ShieldCheck, title: "Health Precautions", desc: "Learn about precautionary measures for seasonal illnesses, chronic conditions, and general wellness." },
  { icon: Activity, title: "Symptom Checker", desc: "Enter your health details and symptoms to receive a risk assessment with personalized guidance." },
  { icon: MessageCircle, title: "AI Health Chatbot", desc: "Chat with our IBM Watson-powered assistant for instant answers about diet, medicine, and health queries." },
  { icon: Stethoscope, title: "Consult a Doctor", desc: "Browse specialist doctors and book consultations directly from our platform." },
  { icon: MapPin, title: "Nearby Hospitals", desc: "Find healthcare facilities near you with contact details and directions." },
  { icon: Phone, title: "24/7 Support", desc: "We always remind you to consult a qualified healthcare professional before starting any treatment." },
];

const Services = () => (
  <div className="min-h-screen py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-heading mb-4">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My Health Buddy offers a range of health tools and guidance to help you make informed decisions about your wellbeing.
        </p>
      </div>

      {/* Hero image */}
      <div className="mb-14 max-w-4xl mx-auto">
        <img
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&h=350&fit=crop"
          alt="Medical team"
          className="w-full h-[300px] object-cover rounded-2xl card-shadow"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-card rounded-xl p-7 card-shadow hover:card-shadow-hover transition-all duration-300 group">
            <div className="h-14 w-14 rounded-xl hero-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <s.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
