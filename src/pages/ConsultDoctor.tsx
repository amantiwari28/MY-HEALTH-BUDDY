import { Stethoscope, Star, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const doctors = [
  { name: "Dr. Sharma", specialty: "Cardiologist", rating: 4.8, experience: 15, hours: "Mon-Fri, 9AM-5PM" },
  { name: "Dr. Patel", specialty: "General Physician", rating: 4.6, experience: 10, hours: "Mon-Sat, 10AM-6PM" },
  { name: "Dr. Gupta", specialty: "Endocrinologist", rating: 4.7, experience: 12, hours: "Tue-Sat, 9AM-4PM" },
  { name: "Dr. Singh", specialty: "Dietitian & Nutritionist", rating: 4.5, experience: 8, hours: "Mon-Fri, 11AM-7PM" },
  { name: "Dr. Reddy", specialty: "Pulmonologist", rating: 4.9, experience: 20, hours: "Mon-Thu, 8AM-3PM" },
  { name: "Dr. Kumar", specialty: "Internal Medicine", rating: 4.7, experience: 14, hours: "Mon-Sat, 9AM-5PM" },
];

const ConsultDoctor = () => {
  const { toast } = useToast();

  const handleBook = (name: string) => {
    toast({ title: "Consultation Requested!", description: `Your request for ${name} has been noted. We'll contact you shortly.` });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-heading mb-3">Consult a Doctor</h1>
          <p className="text-muted-foreground">Find specialists for your health needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {doctors.map((doc, i) => (
            <div key={i} className="bg-card rounded-xl p-7 card-shadow hover:card-shadow-hover transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl mb-1">{doc.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{doc.specialty}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-1">
                <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5" /> {doc.rating}</span>
                <span>· {doc.experience} years</span>
              </div>
              <p className="flex items-center gap-1 text-sm text-muted-foreground mb-5">
                <Clock className="h-3.5 w-3.5" /> {doc.hours}
              </p>
              <Button className="w-full gap-2" onClick={() => handleBook(doc.name)}>
                <Phone className="h-4 w-4" /> Book Consultation
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultDoctor;
