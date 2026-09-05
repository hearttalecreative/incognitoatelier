import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Index from "./pages/Index";
import InsideAtelier from "./pages/InsideAtelier";
import SignatureOfferings from "./pages/SignatureOfferings";
import LegacyTravelPortfolio from "./pages/LegacyTravelPortfolio";
import PrivateRetreats from "./pages/PrivateRetreats";
import TheJournal from "./pages/TheJournal";
import TheFrequencyReturn from "./pages/TheFrequencyReturn";
import PlanYourTrip from "./pages/PlanYourTrip";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/* Restores top-of-page on navigation, and honours in-page anchors. */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/inside-incognito-atelier" element={<InsideAtelier />} />
        <Route path="/signature-offerings" element={<SignatureOfferings />} />
        <Route path="/legacy-travel-portfolio" element={<LegacyTravelPortfolio />} />
        <Route path="/private-retreats" element={<PrivateRetreats />} />
        <Route path="/the-journal" element={<TheJournal />} />
        <Route path="/the-frequency-return" element={<TheFrequencyReturn />} />
        <Route path="/plan-your-trip" element={<PlanYourTrip />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
