import { CartProvider } from "@/context/CartContext";
import { NotificationsProvider } from "@/context/NotificationsContext";
import { AnnouncementsProvider } from "@/context/AnnouncementsContext";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SupportChat from "./components/SupportChat";
import WhatsAppFAB from "./components/WhatsAppFAB";

export default function App() {
  return (
    <NotificationsProvider>
      <AnnouncementsProvider>
        <CartProvider>
          <BrowserRouter basename={__BASE_PATH__}>
            <div className="min-h-screen bg-dark-900 text-white">
              <Navbar />
              <AppRoutes />
              <Footer />
              <SupportChat />
              <WhatsAppFAB />
            </div>
          </BrowserRouter>
        </CartProvider>
      </AnnouncementsProvider>
    </NotificationsProvider>
  );
}