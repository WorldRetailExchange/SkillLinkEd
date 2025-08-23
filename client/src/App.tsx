import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Events from "@/pages/Events";
import Courses from "@/pages/Courses";
import Tutors from "@/pages/Tutors";
import Workshops from "@/pages/Workshops";
import NotFound from "@/pages/not-found";
import ProfilePage from "@/pages/ProfilePage";
import InternationalCourses from "@/pages/InternationalCourses"
import { HelmetProvider } from "react-helmet-async";

function Router() {
  return (
    <Layout>
      <Switch>
        <HelmetProvider>
        <Route path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/courses" component={Courses} />
        <Route path="/tutors" component={Tutors} />
        <Route path="/workshops" component={Workshops} />
         <Route path="/profile" component={ProfilePage} />
         <Route path="/internationalcourses" component={InternationalCourses} />
         </HelmetProvider>
        <Route component={NotFound} />        
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
