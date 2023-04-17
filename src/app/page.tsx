import { AboutUs } from "@/components/AboutUs";
import { HomePage } from "@/components/Home";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <HomePage />
      <AboutUs />
      <Testimonials />
    </div>
  );
}
