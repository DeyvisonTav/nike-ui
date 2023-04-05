import { AboutUs } from "@/components/AboutUs";
import { HomePage } from "@/components/Home";
import { HeaderPage } from "@/components/header/Header";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <HeaderPage />
      <HomePage />
      <AboutUs />
      <Testimonials />
    </div>
  );
}
