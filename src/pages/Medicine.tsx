import { AlertTriangle, Stethoscope } from "lucide-react";

const medicines = [
  { symptom: "Headache", medicines: ["Paracetamol (Acetaminophen)", "Ibuprofen"], dosage: "As per instructions on packaging. Max 4g/day for Paracetamol.", precaution: "Do not take on empty stomach. Avoid alcohol." },
  { symptom: "Cold & Cough", medicines: ["Cetirizine", "Dextromethorphan (cough syrup)", "Steam inhalation"], dosage: "Cetirizine: 10mg once daily. Cough syrup as directed.", precaution: "Stay hydrated. Rest well. Avoid cold beverages." },
  { symptom: "Fever", medicines: ["Paracetamol", "Ibuprofen"], dosage: "Paracetamol 500mg every 4-6 hours. Do not exceed 4g/day.", precaution: "If fever persists >3 days, see a doctor immediately." },
  { symptom: "Acidity / Heartburn", medicines: ["Antacids (Eno, Gelusil)", "Omeprazole", "Ranitidine"], dosage: "As directed. Omeprazole usually 20mg before breakfast.", precaution: "Avoid spicy, oily food. Eat small, frequent meals." },
  { symptom: "Body Pain / Muscle Pain", medicines: ["Ibuprofen", "Diclofenac gel (topical)", "Muscle relaxant"], dosage: "Ibuprofen 400mg with food. Apply gel as needed.", precaution: "Avoid prolonged use. Consult doctor for persistent pain." },
  { symptom: "Diarrhea", medicines: ["ORS (Oral Rehydration Salts)", "Loperamide"], dosage: "ORS after every loose motion. Loperamide as directed.", precaution: "Stay hydrated. Avoid dairy and oily foods. See doctor if bloody stool." },
];

const Medicine = () => (
  <div className="min-h-screen py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-heading mb-4">Medicine Guide</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">Common medicines for everyday symptoms.</p>
      </div>

      {/* Banner image */}
      <div className="mb-10 max-w-3xl mx-auto">
        <img
          src="https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&h=300&fit=crop"
          alt="Medicine and pills"
          className="w-full h-[220px] object-cover rounded-2xl card-shadow"
        />
      </div>

      <div className="flex items-start gap-3 bg-destructive/10 border border-destructive/30 rounded-xl p-4 mb-10 max-w-3xl mx-auto">
        <Stethoscope className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
        <p className="text-sm text-foreground">
          <strong>⚕️ Consult a Doctor:</strong> The information below is for general awareness only. Always consult a qualified healthcare professional before taking any medicine.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {medicines.map((m, i) => (
          <div key={i} className="bg-card rounded-xl p-6 card-shadow">
            <h3 className="font-heading text-xl text-primary mb-3">{m.symptom}</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold">Medicines:</span>
                <ul className="list-disc list-inside text-muted-foreground mt-1">
                  {m.medicines.map((med, j) => <li key={j}>{med}</li>)}
                </ul>
              </div>
              <div>
                <span className="font-semibold">Dosage:</span>
                <p className="text-muted-foreground">{m.dosage}</p>
              </div>
              <div className="flex items-start gap-2 bg-accent/10 rounded-lg p-3">
                <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{m.precaution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Medicine;
