import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Verander HashRouter terug naar BrowserRouter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // <-- Deze lijn aanpassen
import Index from "./pages/Index";
import Projecten from "./pages/Projecten";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Gebruik BrowserRouter hier */}
      <Router> {/* <-- Gebruik <Router> zoals je al deed, maar nu is het BrowserRouter */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projecten" element={<Projecten />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;