import { AlertTriangle } from "lucide-react";

const dietPlans = [
  {
    condition: "General Wellness",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop",
    meals: {
      breakfast: "Oatmeal with berries, nuts, and honey. Green tea.",
      lunch: "Grilled chicken salad with mixed greens, quinoa, olive oil dressing.",
      dinner: "Steamed fish with brown rice and roasted vegetables.",
      snacks: "Fresh fruits, yogurt, almonds.",
    },
  },
  {
    condition: "Cold & Flu",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=250&fit=crop",
    meals: {
      breakfast: "Warm turmeric milk, toast with honey.",
      lunch: "Chicken soup with garlic, ginger, vegetables.",
      dinner: "Light khichdi or congee with steamed veggies.",
      snacks: "Citrus fruits (oranges, lemons), herbal tea.",
    },
  },
  {
    condition: "Digestive Issues",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
    meals: {
      breakfast: "Plain yogurt with banana. Ginger tea.",
      lunch: "Steamed rice with lentil soup (dal) and cooked vegetables.",
      dinner: "Light soup with toast. Avoid spicy food.",
      snacks: "Papaya, buttermilk, crackers.",
    },
  },
  {
    condition: "Diabetes Management",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=250&fit=crop",
    meals: {
      breakfast: "Whole grain toast with avocado. Black coffee (unsweetened).",
      lunch: "Grilled salmon with leafy greens and sweet potato.",
      dinner: "Stir-fried tofu with broccoli, cauliflower, and brown rice.",
      snacks: "Nuts, seeds, cucumber slices with hummus.",
    },
  },
  {
    condition: "Heart Health",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=400&h=250&fit=crop",
    meals: {
      breakfast: "Oats with flaxseeds, walnuts, and blueberries.",
      lunch: "Grilled fish with olive oil, quinoa, steamed asparagus.",
      dinner: "Bean salad with tomatoes, spinach, and lemon dressing.",
      snacks: "Dark chocolate (70%+), almonds, green tea.",
    },
  },
];

const Diet = () => (
  <div className="min-h-screen py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-heading mb-4">Diet Plans</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Choose a diet plan based on your condition. These are general guidelines.
        </p>
      </div>

      <div className="flex items-start gap-3 bg-accent/15 border border-accent/30 rounded-xl p-4 mb-10 max-w-3xl mx-auto">
        <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
        <p className="text-sm text-foreground">
          <strong>Disclaimer:</strong> These diet plans are for informational purposes only. Please consult a doctor or registered dietitian before making any dietary changes.
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {dietPlans.map((plan, i) => (
          <div key={i} className="bg-card rounded-xl overflow-hidden card-shadow">
            <img src={plan.image} alt={plan.condition} className="w-full h-48 object-cover" />
            <div className="p-8">
              <h2 className="font-heading text-2xl text-primary mb-4">{plan.condition}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(plan.meals).map(([meal, desc]) => (
                  <div key={meal} className="bg-secondary/50 rounded-lg p-4">
                    <h4 className="font-body font-semibold capitalize text-sm mb-1">{meal}</h4>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Diet;
