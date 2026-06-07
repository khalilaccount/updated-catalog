import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

export const mainCategories = [
    {
        id: 1,
        title: "Tampons Automatiques",
        description:
            "Des tampons pratiques et résistants pour un usage quotidien en entreprise.",
        image: "https://images.unsplash.com/photo-1708014114844-8a9c7d6d107e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF1dG9tYXRpYyUyMHN0YW1wc3xlbnwwfHwwfHx8MA%3D%3D",
        href: "/produits/tampons-automatiques",
    },
    {
        id: 2,
        title: "Tampons en Bois",
        description:
            "Des tampons traditionnels en bois, élégants et personnalisables.",
        image: "https://images.unsplash.com/photo-1605250803010-37d03931db8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHN0YW1wfGVufDB8fDB8fHww",
        href: "/produits/tampons-bois",
    },
    {
        id: 3,
        title: "Plexiglass",
        description:
            "Plaques et réalisations en plexiglass pour une finition moderne et professionnelle.",
        image: "https://images.unsplash.com/photo-1550438655-400744b9fefc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhcXVlJTIwcGxleGlnbGFzc3xlbnwwfHwwfHx8MA%3D%3D",
        href: "/produits/plexiglass",
    },
    {
        id: 4,
        title: "Signalétique",
        description:
            "Solutions de signalétique intérieure et extérieure adaptées à tous les besoins.",
        image: "https://images.unsplash.com/photo-1573046171778-f6506436ec62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHN0YW1wfGVufDB8fDB8fHww",
        href: "/produits/signaletique",
    },
];

export function MainCategories() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mx-auto
            w-full
            px-4
            py-9
            sm:px-6
            lg:px-16">
            {mainCategories.map((category) => (
                <Link key={category.id} href={category.href}>
                    <Card className="overflow-hidden group cursor-pointer h-full transition-shadow hover:shadow-lg">
                        <CardContent className="p-0">
                            <Image
                                src={category.image}
                                alt={category.title}
                                width={500}
                                height={300}
                                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </CardContent>

                        <CardFooter className="flex flex-col items-start gap-2 p-4">
                            <h3 className="font-semibold text-lg">
                                {category.title}
                            </h3>

                            <p className="text-sm text-muted-foreground">
                                {category.description}
                            </p>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    );
}