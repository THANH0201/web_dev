import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { NewsPage } from "./pages/NewsPage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage } from "./pages/LoginPage";
import { AppointmentPage } from "./pages/AppointmentPage";
import { AppointmentConfirmPage } from "./pages/AppointmentConfirmPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ArticleDetailPage } from "./pages/ArticleDetailPage";
import { UserAccountPage } from "./pages/UserAccountPage";
import { DoctorDashboardPage } from "./pages/DoctorDashboardPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Get initial page from hash
    const hash = window.location.hash.slice(1) || "home";
    // Extract just the page name (before any query parameters)
    const pageName = hash.split('?')[0];
    setCurrentPage(pageName);

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1) || "home";
      const newPageName = newHash.split('?')[0];
      setCurrentPage(newPageName);
      // Scroll to top when page changes
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "service":
        return <ServiceDetailPage />;
      case "news":
        return <NewsPage />;
      case "article":
        return <ArticleDetailPage />;
      case "contact":
        return <ContactPage />;
      case "login":
        return <LoginPage />;
      case "appointment":
        return <AppointmentPage />;
      case "appointment-confirm":
        return <AppointmentConfirmPage />;
      case "account":
        return <UserAccountPage />;
      case "doctor-dashboard":
        return <DoctorDashboardPage />;
      case "admin-dashboard":
        return <AdminDashboardPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
