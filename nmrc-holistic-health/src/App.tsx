import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Laboratory from "./pages/Laboratory";
import Dispensary from "./pages/Dispensary";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blog/BlogPost";
import CreatePost from "./pages/blog/CreatePost";
import Login from "./pages/blog/Login";
import SignUp from "./pages/blog/SignUp";
import EditPost from "./pages/blog/EditPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/dispensary" element={<Dispensary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/create" element={<CreatePost />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/:slug/edit" element={<EditPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
