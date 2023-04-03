import { AboutUs } from "@/components/AboutUs";
import { HomePage } from "@/components/Home";
import { HeaderPage } from "@/components/header/Header";

export default function Home() {
  return (
    <div>
      <HeaderPage />
      <HomePage />
      <AboutUs />
    </div>
  );
}
