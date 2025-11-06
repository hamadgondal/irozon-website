import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import News from "./pages/News";
import BlogPost from "./pages/BlogPost";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import PageViewTracker from "@/components/PageViewTracker";
import ReactGA from "react-ga4";
import Layout from "./components/Layout";
import { HelmetProvider } from "react-helmet-async";
import { FC } from "react";

// 1. Define a TypeScript interface for the React component that includes the React Snap static property
interface AppWithSnapPrecache extends FC {
  __react_snap_precache?: string[];
}

// Re-enabling GA initialization block
const GA4_MEASUREMENT_ID = "G-P5DBM073EK";
ReactGA.initialize(GA4_MEASUREMENT_ID);

// Define routes that React Snap should explicitly pre-render
const routesToPrecache = ["/", "/contact", "/services", "/projects", "/news", "/auth"];

// 2. Define the App component using the new, correctly typed interface
const queryClient = new QueryClient();

const App: AppWithSnapPrecache = () => (
  <QueryClientProvider client={queryClient}>
    {/* HelmetProvider must wrap the entire application to manage metadata */}
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageViewTracker />
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<BlogPost />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<Admin />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

// 3. Attach the list of routes to the component without 'as any'
App.__react_snap_precache = routesToPrecache;

export default App;
