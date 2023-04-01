import { HeaderPage } from "@/components/header/Header";
import { HomePage } from "@/components/Home";

export default function Home() {
  return (
    <div className="w-screen ">
      <HeaderPage/>
      <HomePage/>
    </div>
  );
}
