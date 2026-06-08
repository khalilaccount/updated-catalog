"use client"; // Required for scroll-triggered animations

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react"; // Modern package import

import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

export const mainCategories = [
    {
        id: 1,
        title: "Tampons Automatiques",
        description: "Des tampons pratiques et résistants pour un usage quotidien en entreprise.",
        image: "https://images.unsplash.com/photo-1708014114844-8a9c7d6d107e?w=600&auto=format&fit=crop&q=60",
        href: "/produits/tampons-automatiques",
    },
    {
        id: 2,
        title: "Tampons en Bois",
        description: "Des tampons traditionnels en bois, élégants et personnalisables.",
        image: "https://images.unsplash.com/photo-1605250803010-37d03931db8f?w=600&auto=format&fit=crop&q=60",
        href: "/produits/tampons-bois",
    },
    {
        id: 3,
        title: "Plexiglass",
        description: "Plaques et réalisations en plexiglass pour une finition moderne et professionnelle.",
        image: "https://images.unsplash.com/photo-1550438655-400744b9fefc?w=600&auto=format&fit=crop&q=60",
        href: "/produits/plexiglass",
    },
    {
        id: 4,
        title: "Signalétique",
        description: "Solutions de signalétique intérieure et extérieure adaptées à tous les besoins.",
        image: "https://images.unsplash.com/photo-1573046171778-f6506436ec62?w=600&auto=format&fit=crop&q=60",
        href: "/produits/signaletique",
    },
];

// Motion configuration for the parent container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between each card's animation (150ms)
        },
    },
};

// Motion configuration for each individual card item
const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Start invisible and pushed down slightly
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    },
};

export function MainCategories() {
    return (
        <section id="products-section" className="scroll-mt-16 w-full bg-background">

            {/* 1. Turn the grid into a motion.div to coordinate children transitions */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }} // Triggers slightly before element fills viewport
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mx-auto w-full px-4 py-9 sm:px-6 lg:px-16"
            >
                {mainCategories.map((category) => (
                    /* 2. Wrap each card map layout in a motion.div item */
                    <motion.div key={category.id} variants={itemVariants} className="h-full">
                        <Link href={category.href} className="block h-full">
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
                                    <h3 className="font-semibold text-lg">{category.title}</h3>
                                    <p className="text-sm text-muted-foreground">{category.description}</p>
                                </CardFooter>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
}