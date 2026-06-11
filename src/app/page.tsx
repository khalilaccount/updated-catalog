import { Navbar } from "@/components/shared/Navbar";
import { Poppins } from "next/font/google";
import HeroSection from "@/components/Hero";
import { Separator } from "@/components/shared/Separator";
import { title } from "process";
import { MainCategories } from "@/components/shared/MainCategories";
import { GridSection } from "@/components/shared/BestSellers"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
import { ContactSection } from "@/components/shared/ContactSection";
export default function Page() {
  return (
    <div>
      <HeroSection />
      <Separator
        title="Nos Produits Principaux"
        description="Découvrez notre gamme de produits conçus pour répondre aux besoins des entreprises, professionnels et particuliers. Des tampons personnalisés aux réalisations en plexiglass, nous vous proposons des solutions de qualité adaptées à chaque projet."
      />
      <MainCategories />
      <Separator
        title="Les Plus Vendus"
        description="Retrouvez les produits les plus appréciés par nos clients pour leur qualité, leur durabilité et leur finition soignée."
      />
      <GridSection />
      <ContactSection />
    </div>
  );
}