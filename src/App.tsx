import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WatsonChat from "@/components/WatsonChat";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Diet from "./pages/Diet";
import Medicine from "./pages/Medicine";
import Precautions from "./pages/Precautions";
import SymptomChecker from "./pages/SymptomChecker";
import ConsultDoctor from "./pages/ConsultDoctor";
import NearbyHospitals from "./pages/NearbyHospitals";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/diet" element={<ProtectedRoute><Diet /></ProtectedRoute>} />
            <Route path="/medicine" element={<ProtectedRoute><Medicine /></ProtectedRoute>} />
            <Route path="/precautions" element={<ProtectedRoute><Precautions /></ProtectedRoute>} />
            <Route path="/symptoms" element={<ProtectedRoute><SymptomChecker /></ProtectedRoute>} />
            <Route path="/consult-doctor" element={<ProtectedRoute><ConsultDoctor /></ProtectedRoute>} />
            <Route path="/nearby-hospitals" element={<ProtectedRoute><NearbyHospitals /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <WatsonChat />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
