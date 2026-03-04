import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const hospitals = [
  { name: "City Heart Hospital", address: "123 Health Street, Medical District", phone: "+91 98765 43210", hours: "24/7 Emergency", type: "Multi-Specialty" },
  { name: "Apollo Medical Center", address: "456 Wellness Road, Downtown", phone: "+91 98765 43211", hours: "24/7", type: "Super-Specialty" },
  { name: "LifeCare Hospital", address: "789 Care Avenue, Green Park", phone: "+91 98765 43212", hours: "6AM - 10PM", type: "General Hospital" },
  { name: "Cardiac Care Institute", address: "321 Heart Lane, Sector 5", phone: "+91 98765 43213", hours: "24/7 Cardiac Care", type: "Cardiac Center" },
  { name: "Wellness Clinic", address: "555 Vitality Blvd, Central", phone: "+91 98765 43214", hours: "8AM - 8PM", type: "Clinic" },
];

const NearbyHospitals = () => (
  <div className="min-h-screen py-16">
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-heading mb-3">Nearby Hospitals</h1>
        <p className="text-muted-foreground">Find healthcare facilities near you</p>
      </div>

      <div className="space-y-5 max-w-4xl">
        {hospitals.map((h, i) => (
          <div key={i} className="bg-card rounded-xl p-6 card-shadow flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="h-7 w-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-lg mb-1">{h.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{h.address}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> {h.phone}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {h.hours}</span>
                <span className="border rounded-full px-2.5 py-0.5 text-foreground">{h.type}</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-1.5 shrink-0" onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(h.name + " " + h.address)}`, "_blank")}>
              <ExternalLink className="h-3.5 w-3.5" /> Directions
            </Button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default NearbyHospitals;
