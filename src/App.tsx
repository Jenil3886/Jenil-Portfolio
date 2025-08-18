import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/theme-provider";
import { Navigation } from "./components/navigation";
import { ScrollArea } from "./components/ui/scroll-area"
import HomeSection from "./components/section/HomeSection";
import AboutSection from "./components/section/AboutSection";
import ProjectsSection from "./components/section/ProjectsSection";
import SkillsSection from "./components/section/SkillsSection";
import TimelineSection from "./components/section/TimelineSection";
import AchievementsSection from "./components/section/AchievementsSection";
import CodePlaygroundSection from "./components/section/CodePlaygroundSection";
import FaqSection from "./components/section/FaqSection";
import ContactSection from "./components/section/ContactSection";
import Home from "./pages/Home";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Navigation />
        <ScrollArea className="h-screen">
          <main>
            <HomeSection />
            {/* <Home /> */}
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <TimelineSection />
            <AchievementsSection />
            <CodePlaygroundSection />
            <FaqSection />
            <ContactSection />
          </main>
        </ScrollArea>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;