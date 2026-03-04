import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Heart, AlertTriangle, Stethoscope, ArrowRight, ArrowLeft, ShieldCheck, Apple, Pill } from "lucide-react";
import { Link } from "react-router-dom";

const allSymptoms = [
  "Chest Pain", "Shortness of Breath", "Rapid Heartbeat", "Pain in Arm/Shoulder",
  "Dizziness", "Fatigue", "Swelling in Legs", "Cold Sweats",
  "Nausea", "Irregular Heartbeat", "Headache", "Jaw Pain",
  "Back Pain", "Anxiety", "Insomnia",
];

interface PatientInfo {
  age: string;
  gender: string;
  height: string;
  weight: string;
  bpSystolic: string;
  bpDiastolic: string;
  cholesterol: string;
  bloodSugar: string;
  smoking: string;
  familyHistory: string;
}

const SymptomChecker = () => {
  const [step, setStep] = useState(1);
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    age: "", gender: "Male", height: "", weight: "",
    bpSystolic: "120", bpDiastolic: "80", cholesterol: "200",
    bloodSugar: "100", smoking: "No", familyHistory: "No",
  });
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const updateField = (field: keyof PatientInfo, value: string) =>
    setPatientInfo((prev) => ({ ...prev, [field]: value }));

  const toggleSymptom = (s: string) =>
    setSelectedSymptoms((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  // Simple risk calculation
  const calculateRisk = () => {
    let score = 0;
    const age = parseInt(patientInfo.age) || 0;
    if (age > 50) score += 15;
    else if (age > 35) score += 8;
    if (patientInfo.smoking === "Yes") score += 15;
    if (patientInfo.familyHistory === "Yes") score += 12;
    const bp = parseInt(patientInfo.bpSystolic) || 120;
    if (bp > 140) score += 15;
    else if (bp > 130) score += 8;
    const chol = parseInt(patientInfo.cholesterol) || 200;
    if (chol > 240) score += 12;
    else if (chol > 200) score += 6;
    const sugar = parseInt(patientInfo.bloodSugar) || 100;
    if (sugar > 126) score += 12;
    else if (sugar > 100) score += 6;
    score += selectedSymptoms.length * 3;
    return Math.min(score, 100);
  };

  const risk = calculateRisk();
  const riskLabel = risk < 30 ? "Low Risk" : risk < 60 ? "Moderate Risk" : "High Risk";
  const riskColor = risk < 30 ? "text-primary" : risk < 60 ? "text-accent" : "text-destructive";
  const confidence = Math.min(70 + selectedSymptoms.length * 3, 95);

  const precautions = [
    "Monitor your blood pressure and cholesterol regularly",
    "Exercise for at least 30 minutes daily",
    "Avoid smoking and limit alcohol consumption",
    "Manage stress through yoga or meditation",
    "Get regular health check-ups (at least annually)",
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Step 1: Patient Information */}
        {step === 1 && (
          <>
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-heading mb-2">Patient Information</h1>
              <p className="text-muted-foreground">Step 1 of 3 — Enter your health details</p>
            </div>
            <div className="bg-card rounded-xl p-8 card-shadow space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label>Age *</Label>
                  <Input type="number" value={patientInfo.age} onChange={(e) => updateField("age", e.target.value)} placeholder="Enter age" required />
                </div>
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={patientInfo.gender} onChange={(e) => updateField("gender", e.target.value)}>
                    <option>Male</option><option>Female</option><option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Height (cm) *</Label>
                  <Input type="number" value={patientInfo.height} onChange={(e) => updateField("height", e.target.value)} placeholder="Enter height" />
                </div>
                <div className="space-y-2">
                  <Label>Weight (kg) *</Label>
                  <Input type="number" value={patientInfo.weight} onChange={(e) => updateField("weight", e.target.value)} placeholder="Enter weight" />
                </div>
                <div className="space-y-2">
                  <Label>Blood Pressure Systolic</Label>
                  <Input type="number" value={patientInfo.bpSystolic} onChange={(e) => updateField("bpSystolic", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Blood Pressure Diastolic</Label>
                  <Input type="number" value={patientInfo.bpDiastolic} onChange={(e) => updateField("bpDiastolic", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Cholesterol (mg/dL)</Label>
                  <Input type="number" value={patientInfo.cholesterol} onChange={(e) => updateField("cholesterol", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Blood Sugar (mg/dL)</Label>
                  <Input type="number" value={patientInfo.bloodSugar} onChange={(e) => updateField("bloodSugar", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Smoking</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={patientInfo.smoking} onChange={(e) => updateField("smoking", e.target.value)}>
                    <option>No</option><option>Yes</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Family History of Heart Disease</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={patientInfo.familyHistory} onChange={(e) => updateField("familyHistory", e.target.value)}>
                    <option>No</option><option>Yes</option>
                  </select>
                </div>
              </div>
              <Button onClick={() => setStep(2)} disabled={!patientInfo.age || !patientInfo.height || !patientInfo.weight} size="lg" className="w-full gap-2">
                Continue to Symptoms <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}

        {/* Step 2: Symptom Selection */}
        {step === 2 && (
          <>
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-heading mb-2">Select Your Symptoms</h1>
              <p className="text-muted-foreground">Step 2 of 3 — Check any symptoms you're experiencing</p>
            </div>
            <div className="bg-card rounded-xl p-8 card-shadow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {allSymptoms.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleSymptom(s)}
                    className={`flex items-center gap-3 rounded-lg border p-4 text-left text-sm transition-all ${
                      selectedSymptoms.includes(s)
                        ? "border-primary bg-primary/5 text-foreground"
                        : "border-input hover:border-primary/40"
                    }`}
                  >
                    <span className={`h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      selectedSymptoms.includes(s) ? "border-primary bg-primary" : "border-muted-foreground/40"
                    }`}>
                      {selectedSymptoms.includes(s) && <span className="h-2 w-2 rounded-full bg-primary-foreground" />}
                    </span>
                    {s}
                  </button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">Selected: {selectedSymptoms.length} symptoms</p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} className="gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back
                </Button>
                <Button onClick={() => setStep(3)} size="lg" className="flex-1 gap-2">
                  Get Results <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}

        {/* Step 3: Results */}
        {step === 3 && (
          <>
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-heading mb-2">Your Health Assessment</h1>
              <p className="text-muted-foreground">Step 3 of 3 — Review your results</p>
            </div>

            {/* Risk Score */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-10 text-center mb-8">
              <CheckCircle className={`h-16 w-16 mx-auto mb-4 ${riskColor}`} />
              <h2 className="text-2xl font-heading mb-2">{riskLabel}</h2>
              <p className={`text-5xl font-heading ${riskColor}`}>{risk}%</p>
              <p className="text-muted-foreground text-sm mt-2">Risk Score (Confidence: {confidence}%)</p>
            </div>

            {/* Precautions */}
            <div className="bg-card rounded-xl p-8 card-shadow mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-xl">Precautions & Measures</h3>
              </div>
              <ul className="space-y-3">
                {precautions.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <h4 className="font-semibold text-destructive">Important Disclaimer</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                This is an indicative assessment only. Please consult a qualified doctor before making any medical decisions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <Link to="/diet">
                <Button variant="outline" className="w-full gap-2"><Apple className="h-4 w-4" /> Diet Plan</Button>
              </Link>
              <Link to="/medicine">
                <Button variant="outline" className="w-full gap-2"><Pill className="h-4 w-4" /> Medicine Guide</Button>
              </Link>
              <Link to="/consult-doctor">
                <Button className="w-full gap-2"><Stethoscope className="h-4 w-4" /> Consult Doctor</Button>
              </Link>
            </div>

            <Button variant="outline" onClick={() => { setStep(1); setSelectedSymptoms([]); }} className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Start Over
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;
