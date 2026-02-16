import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import BTech from "./pages/BTech";
import CSE from "./pages/BranchCSE";
import AIML from "./pages/BranchAIML";
import { ECE, Mechanical, Civil } from "./pages/BranchSimple";
import BPharmacy from "./pages/BPharmacy";
import BBAPage from "./pages/BBAPage";
import CACMA from "./pages/CACMA";
import Degree from "./pages/Degree";
import CampusLife from "./pages/CampusLife";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Jobs from "./pages/Jobs";
import Internships from "./pages/Internships";
import Departments from "./pages/Departments";
import MTech from "./pages/MTech";
import PG from "./pages/PG";
import PhD from "./pages/PhD";
import Gate from "./pages/Gate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/btech" element={<BTech />} />
          <Route path="/courses/btech/cse" element={<CSE />} />
          <Route path="/courses/btech/aiml" element={<AIML />} />
          <Route path="/courses/btech/ece" element={<ECE />} />
          <Route path="/courses/btech/mechanical" element={<Mechanical />} />
          <Route path="/courses/btech/civil" element={<Civil />} />
          <Route path="/courses/bpharmacy" element={<BPharmacy />} />
          <Route path="/courses/bba" element={<BBAPage />} />
          <Route path="/courses/ca-cma" element={<CACMA />} />
          <Route path="/courses/degree" element={<Degree />} />
          <Route path="/courses/mtech" element={<MTech />} />
          <Route path="/courses/pg" element={<PG />} />
          <Route path="/courses/phd" element={<PhD />} />
          <Route path="/gate" element={<Gate />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
