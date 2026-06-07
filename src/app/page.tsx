import { Navbar } from "@/components/shared/Navbar";
import { Poppins } from "next/font/google";
import HeroSection from "@/components/Hero";
import { Separator } from "@/components/shared/Separator";
import { title } from "process";
import { MainCategories } from "@/components/shared/MainCategories";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function Page() {
  return (
    <div>
      <HeroSection />
      <Separator
        title="Nos Produits Principaux"
        description="Découvrez notre gamme de produits conçus pour répondre aux besoins des entreprises, professionnels et particuliers. Des tampons personnalisés aux réalisations en plexiglass, nous vous proposons des solutions de qualité adaptées à chaque projet."
      />
      <MainCategories />
    </div>
  );
}