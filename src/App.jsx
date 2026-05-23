import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Catalog from "./components/Catalog";
import Services from "./components/Services";
import BookingSteps from "./components/BookingSteps";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Catalog />
        <Services />
        <BookingSteps/>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
