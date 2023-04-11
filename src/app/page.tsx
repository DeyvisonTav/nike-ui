import { AboutUs } from "@/components/AboutUs";
import { HomePage } from "@/components/Home";
import { HeaderPage } from "@/components/header/Header";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <HomePage />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
}
