import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import CookiePolicy from "@/pages/CookiePolicy";
import DataRights from "@/pages/DataRights";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/politica-de-privacidade"} component={PrivacyPolicy} />
      <Route path={"/termos-de-uso"} component={TermsOfUse} />
      <Route path={"/politica-de-cookies"} component={CookiePolicy} />
      <Route path={"/direitos-do-titular"} component={DataRights} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}