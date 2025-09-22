import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Consultation from "./pages/Consultation";
import Pharmacy from "./pages/Pharmacy";
import Diagnostics from "./pages/Diagnostics";
import BloodBank from "./pages/BloodBank";
import MLInsights from "./pages/MLInsights";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/blood-bank" element={<BloodBank />} />
          <Route path="/ml-insights" element={<MLInsights />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
