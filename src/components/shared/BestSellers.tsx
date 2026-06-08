import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 1. Seed Data Array containing 8 items matching your catalog profile
const seededProducts = [
    {
        id: "p1",
        title: "Trodat Printy 4912",
        category: "Tampons Automatiques",
        description: "Tampon encreur automatique idéal pour 3 à 4 lignes de texte de société.",
        dimensions: "38 x 14 mm",
        image: "https://www.tuniprint.pro/wp-content/uploads/2017/05/trodat4913-500x500.jpg",
        href: "/products/tampons/automatiques/trodat-4911",
    },
    {
        id: "p2",
        title: "Tampon Bois Tradition",
        category: "Tampons en Bois",
        description: "Monture en bois de hêtre verni classique pour une empreinte authentique.",
        dimensions: "60 x 40 mm",
        image: "https://images.unsplash.com/photo-1605250803010-37d03931db8f?w=500&auto=format&fit=crop&q=60",
        href: "/products/tampons/en-bois/bois-tradition",
    },
    {
        id: "p3",
        title: "Plaque Professionnelle Cabinet",
        category: "Plexiglass",
        description: "Plaque en plexiglass transparent avec gravure arrière, effet brillant.",
        dimensions: "300 x 200 mm",
        image: "https://i.pinimg.com/564x/0c/75/f3/0c75f3b5fb2c7fff93541bc7279b811b.jpg",
        href: "/products/plaques/de-bureau/cabinet-plexi",
    },
    {
        id: "p4",
        title: "Pince à Plomber Professionnelle",
        category: "Autres Produits",
        description: "Pince de sécurité en fonte d'acier pour scellés de sécurité industriels.",
        dimensions: "Longueur 165 mm",
        image: "https://www.manutan.be/img/S/GRP/ST/AIG279515.jpg",
        href: "/products/autres/pince-a-plomber",
    },
    {
        id: "p5",
        title: "Trodat Professional 4638",
        category: "Tampons Automatiques",
        description: "Tampon métallique lourd pour un usage intensif et répétitif en bureau.",
        dimensions: "56 x 26 mm",
        image: "https://digiprint.tn/web/image/product.template/2913/image_1024?unique=08fd246",
        href: "/products/tampons/automatiques/trodat-5204",
    },
    {
        id: "p6",
        title: "Chevalet de Bureau Plexi",
        category: "Plexiglass",
        description: "Porte-nom double face en plexiglass plié pour comptoirs et bureaux.",
        dimensions: "210 x 80 mm",
        image: "https://images.unsplash.com/photo-1611075551111-dfda5f9c6f02?w=500&auto=format&fit=crop&q=60",
        href: "/products/plaques/de-bureau/chevalet-plexi",
    },
    {
        id: "p7",
        title: "Timbre de Poche",
        category: "Tampons Automatiques",
        description: "Dateur automatique réglable avec texte personnalisé d'accompagnement.",
        dimensions: "45 x 45 mm",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaldMw-5EfFSifdpSPSs5c_yab_RJWwtF2hg&s",
        href: "/products/tampons/dateurs/shiny-dateur",
    },
    {
        id: "p8",
        title: "Mini Dateur 4810",
        category: "Encre et Accessoires",
        description: "Flacon d'encre de rechange pour boîtiers manuels et cassettes automatiques.",
        dimensions: "28 ml",
        image: "https://ctstunisie.com/17044-large_default/dateur-automatiquetrodat-4810-francais.jpg",
        href: "/products/tampons/encre-et-accessoires/encre-7011",
    },
];

type GridSectionProps = {
    className?: string;
};

export function GridSection({ className }: GridSectionProps) {
    return (
        <section className={`py-12 ${className}`}>
            <Container>
                {/* Dynamic header row for the product list */}
                <div className="mb-8 flex items-baseline justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                        Produits Vedettes
                    </h2>
                </div>

                {/* The responsive grid container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {seededProducts.map((product) => (
                        <Card key={product.id} className="flex flex-col overflow-hidden h-full group border border-zinc-200 dark:border-zinc-800 bg-card transition-all hover:shadow-md">

                            {/* Product Image Wrapper */}
                            <div className="relative w-full h-48 bg-muted overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                                    className="object-contain transition-transform duration-300 group-hover:scale-103"
                                />
                                {/* Category Badge Overlaid on Image */}
                                <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider text-white px-2 py-0.5 rounded-sm">
                                    {product.category}
                                </span>
                            </div>

                            {/* Product Headers */}
                            <CardHeader className="p-4 pb-1">
                                <CardTitle className="text-base line-clamp-1 font-semibold group-hover:text-primary transition-colors">
                                    {product.title}
                                </CardTitle>
                                <span className="text-[11px] text-muted-foreground font-medium">
                                    Format: {product.dimensions}
                                </span>
                            </CardHeader>

                            {/* Description Content */}
                            <CardContent className="p-4 pt-1 pb-4 flex-1">
                                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                                    {product.description}
                                </p>
                            </CardContent>

                            {/* Interactive Footer */}
                            <CardFooter className="p-4 pt-0 border-t border-zinc-100 dark:border-zinc-900 mt-auto bg-zinc-50/50 dark:bg-zinc-900/20">
                                <Button asChild variant="ghost" size="sm" className="w-full mt-3 text-xs font-medium">
                                    <Link href={product.href}>
                                        Voir Détails →
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}