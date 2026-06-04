import { Navbar } from "@/components/shared/Navbar";
import { Poppins } from "next/font/google";
import HeroSection from "@/components/Hero";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function Page() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}