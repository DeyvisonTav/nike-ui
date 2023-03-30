import { HeaderPage } from "@/components/Header";
import { HomePage } from "@/components/Home";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <HeaderPage />
      <HomePage />
    </div>
  );
}
