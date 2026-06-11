import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Award,
    Layers,
    Hammer,
    Building2,
    ArrowRight,
    Anchor
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - 1975;

    const clientCategories = [
        {
            category: "Institutions Publiques",
            clients: ["Ministère des Finances", "Ministère du Gouvernement", "Hôpital Habib Thameur"]
        },
        {
            category: "Grands Groupes & Industrie",
            clients: ["Groupe Poulina Holding", "Valeo"]
        },
        {
            category: "Secteur Bancaire",
            clients: ["BTK Bank", "Attijari Bank"]
        }
    ];

    return (
        <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen">

            {/* 1. HERO SECTION */}
            <section className="relative py-20 lg:py-28 bg-zinc-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#169875]/20 via-zinc-950 to-zinc-950" />
                <Container className="relative z-10">
                    <div className="max-w-3xl space-y-6">
                        <Badge className="bg-[#169875] hover:bg-[#169875]/90 text-white border-none px-3 py-1 text-sm font-semibold tracking-wider uppercase">
                            Depuis 1975
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                            Plus de {yearsOfExperience} ans <br />
                            <span className="text-[#169875]">d'Excellence et de Précision.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
                            Basée au cœur de Tunis à **Bab Bhar**, La Gravure Moderne réinvente le marquage professionnel, alliant l'artisanat traditionnel aux technologies industrielles de pointe.
                        </p>
                    </div>
                </Container>
            </section>

            {/* 2. STORY SECTION */}
            <section className="py-20 border-b border-zinc-100 dark:border-zinc-900">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        <div className="lg:col-span-7 space-y-6">
                            <div className="flex items-center gap-2 text-[#169875] font-bold uppercase tracking-wider text-sm">
                                <Anchor className="h-4 w-4" /> Notre Histoire
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight">De l'atelier historique de Bab Bhar aux institutions nationales</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Fondée en 1975, notre maison s'est imposée comme la référence incontournable de la gravure et de la fabrication de tampons en Tunisie. Depuis notre atelier de Bab Bhar à Tunis, nous accompagnons l'évolution des entreprises et des administrations en leur fournissant des outils de marquage d'une précision millimétrique.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Notre longévité est le fruit d'une quête permanente de perfection : chaque sceau, chaque plaque et chaque gravure porte en elle la garantie d'un savoir-faire transmis et perfectionné depuis plus d'un demi-siècle.
                            </p>
                        </div>

                        <div className="lg:col-span-5 bg-zinc-900 text-white p-8 rounded-2xl relative overflow-hidden shadow-2xl border border-zinc-800">
                            <div className="absolute -right-10 -bottom-10 text-zinc-800 font-black text-9xl select-none opacity-50">
                                50+
                            </div>
                            <div className="relative z-10 space-y-6">
                                <div className="text-6xl font-black text-[#169875] font-mono">{yearsOfExperience}</div>
                                <h4 className="text-xl font-bold">Années d'indépendance technique et d'innovation en Tunisie.</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Nous ne créons pas de simples outils de marquage. Nous forgeons l'identité officielle des plus grandes structures du pays avec des matériaux conçus pour traverser les générations.
                                </p>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>

            {/* 3. CRAFT SECTION: Corrigée selon vos spécifications */}
            <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight">Notre Artisanat d'Exception</h2>
                        <p className="text-muted-foreground">Des composants certifiés mondiaux aux finitions industrielles les plus robustes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Carte 1: Les montures */}
                        <Card className="relative overflow-hidden border-none shadow-md min-h-[320px] flex flex-col justify-evenly group">

                            {/* 1. L'image de fond qui prend 100% de la largeur et hauteur */}
                            <Image
                                fill
                                src="https://image.made-in-china.com/202f0j00BcQvzHbWbjqu/Machine-de-fabrication-de-tampons-en-caoutchouc-de-haute-pr-cision-CO2-Graveur-laser.webp"
                                alt="engraving-image"
                                className="absolute inset-0 object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* 2. L'overlay sombre pour garantir un contraste parfait pour le texte */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent z-10" />

                            {/* 3. Le contenu textuel forcé au-dessus (z-20) */}
                            <CardContent className="relative z-20 pt-6 pb-8 space-y-4 text-white">

                                {/* Badge icône avec un fond plus opaque pour rester visible sur l'image */}
                                <div className="p-3 bg-zinc-950 w-fit rounded-xl shadow-lg">
                                    <Award className="h-6 w-6 text-white" />
                                </div>

                                <h3 className="text-xl font-bold tracking-tight text-white">
                                    Tampons de Haute Qualité
                                </h3>

                                {/* Remplacement de text-muted-foreground par text-zinc-200 pour la lisibilité */}
                                <p className="text-zinc-200 text-sm leading-relaxed">
                                    Partenaire officiel des plus grandes marques mondiales comme <strong>Trodat</strong> et <strong>Colop</strong>. Nous garantissons des mécanismes fluides, rechargeables et conçus pour des centaines de milliers d'empreintes nettes.
                                </p>

                            </CardContent>
                        </Card>

                        {/* Carte 2: Plexiglass & Peinture Astral */}
                        <Card className="relative overflow-hidden border-none shadow-md min-h-[320px] flex flex-col justify-end group">

                            {/* 1. L'image de fond qui prend 100% de la largeur et hauteur */}
                            <Image
                                fill
                                src="https://www.acrylite.co/files/content/acrylite.co/products/product-brands/acrylite-acrylic-sheet.jpg"
                                alt="engraving-image"
                                className="absolute inset-0 object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* 2. L'overlay sombre pour garantir un contraste parfait pour le texte */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent z-10" />

                            {/* 3. Le contenu textuel forcé au-dessus (z-20) */}
                            <CardContent className="relative z-20 pt-6 pb-8 space-y-4 text-white">

                                {/* Badge icône avec un fond plus opaque pour rester visible sur l'image */}
                                <div className="p-3 bg-[#169875]/10 w-fit rounded-xl">
                                    <Layers className="h-6 w-6 text-" />
                                </div>
                                <h3 className="text-xl font-bold">Plexiglass & Peinture Haute Qualité</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Spécialistes des plaques en Plexiglass haut de gamme. Nous utilisons la peinture <strong>Astral</strong> pour assurer des finitions impeccables, une netteté absolue des caractères et une résistance maximale au temps.
                                </p>

                            </CardContent>
                        </Card>



                        {/* Carte 3: Marquage sur Fer */}
                        <Card className="relative overflow-hidden border-none shadow-md min-h-[320px] flex flex-col justify-end group">
                            {/* 1. L'image de fond qui prend 100% de la largeur et hauteur */}
                            <Image
                                fill
                                src="https://www.lfc.com.sg/_assets/tinymcpuk/gambar/image/Blogs/dot%20peen%20marking/stylus%20dot%20peen%20marking.jpg"
                                alt="engraving-image"
                                className="absolute inset-0 object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* 2. L'overlay sombre pour garantir un contraste parfait pour le texte */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent z-10" />

                            {/* 3. Le contenu textuel forcé au-dessus (z-20) */}
                            <CardContent className="relative z-20 pt-6 pb-8 space-y-4 text-white">
                                {/* Badge icône avec un fond plus opaque pour rester visible sur l'image */}
                                <div className="p-3 bg-[#169875]/10 w-fit rounded-xl">
                                    <Hammer className="h-6 w-6 text-[#169875]" />
                                </div>
                                <h3 className="text-xl font-bold">Marquage sur Fer</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Conception et fabrication d'empreintes et de blocs de marquage sur fer de haute longévité. Une solution industrielle robuste, taillée pour résister aux pressions intenses et aux marquages répétitifs.
                                </p>
                            </CardContent>
                        </Card>

                    </div>
                </Container>
            </section>

            {/* 4. CLIENTS SECTION */}
            <section className="py-20">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <div className="flex justify-center text-[#169875] font-bold uppercase tracking-wider text-sm">
                            <Building2 className="h-4 w-4 mr-2" /> Références Institutionnelles
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight">Ils nous confient leur sceau officiel</h2>
                        <p className="text-muted-foreground">Du sommet de l'État aux multinationales industrielles, la confiance ne se donne pas, elle se grave.</p>
                    </div>

                    <div className="space-y-8 max-w-5xl mx-auto">
                        {clientCategories.map((cat) => (
                            <div key={cat.category} className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-100 dark:border-zinc-800">
                                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-4">{cat.category}</span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {cat.clients.map((client) => (
                                        <div
                                            key={client}
                                            className="bg-white dark:bg-zinc-950 p-4 rounded-lg border border-zinc-200/60 dark:border-zinc-800 text-center font-medium text-sm text-zinc-700 dark:text-zinc-300 shadow-sm hover:border-[#169875]/50 hover:text-[#169875] transition-all duration-200 flex items-center justify-center min-h-[56px]"
                                        >
                                            {client}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 5. CTA SECTION */}
            <section className="py-16 bg-[#169875] text-white">
                <Container className="text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-black">Besoin d'un marquage conforme et durable ?</h2>
                    <p className="text-emerald-100 max-w-xl mx-auto text-sm md:text-base">
                        Profitez de l'expertise du plus ancien atelier de gravure moderne de la capitale pour sécuriser et authentifier vos documents.
                    </p>
                    <Button size="lg" variant="secondary" asChild className="font-bold bg-white text-[#169875] hover:bg-zinc-100">
                        <Link href="/products">
                            Découvrir nos Solutions <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </Container>
            </section>

        </div>
    );
}