"use client" // Required for client-side interactions and sliders

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const heroCategories = [
    {
        title: "Precision Stamps",
        description: "Automatic, wooden & heavy-duty iron stamps.",
        imageSrc: "https://images.unsplash.com/photo-1578531504112-0dcd95eda450?q=80&w=1170&auto=format&fit=crop",
        href: "/products/stamps",
    },
    {
        title: "Plexiglass Creations",
        description: "Premium desk signs, display cases, and custom cutting.",
        imageSrc: "https://images.unsplash.com/photo-1611075551111-dfda5f9c6f02?q=80&w=1170&auto=format&fit=crop",
        href: "/products/plexiglass",
    },
    {
        title: "Custom Engraving",
        description: "Bespoke corporate gifts and industrial marking.",
        imageSrc: "https://cdn11.bigcommerce.com/s-djtoxhiu6i/images/stencil/1280x1280/products/29160/28768/566__76349.1668465792.jpg?c=2",
        href: "/products/custom",
    },
]

export default function HeroSection() {
    // Set up the autoplay plugin configuration (4 seconds per slide)
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
    )

    const scrollToProducts = () => {
        const productsSection = document.getElementById("products-section")
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section className="relative w-full h-[550px] overflow-hidden bg-black">
            <Carousel
                plugins={[plugin.current]}
                className="w-full h-full"
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent className="h-[550px] ml-0">
                    {heroCategories.map((category, index) => (
                        <CarouselItem key={category.title} className="relative w-full h-full pl-0">
                            <Link href={category.href} className="block w-full h-full relative group">

                                {/* Next.js Optimized Image Container */}
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <Image
                                        src={category.imageSrc}
                                        alt={category.title}
                                        fill
                                        priority={index === 0} // Only prioritize preloading the very first image
                                        sizes="100vw" // Since it takes up 100% of the screen width now
                                        className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
                                    />
                                    {/* High-contrast overlay for text safety */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
                                </div>

                                {/* Text Layout Layer */}
                                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-16 max-w-4xl">
                                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2 block">
                                        Collection 0{index + 1}
                                    </span>
                                    <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight max-w-xl">
                                        {category.title}
                                    </h1>
                                    <p className="mt-3 text-base text-zinc-200 max-w-md">
                                        {category.description}
                                    </p>
                                    <div className="mt-6 inline-flex w-fit items-center text-xs font-semibold text-white uppercase tracking-wider bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-md border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                        Découvrir l'assortiment →
                                    </div>
                                </div>

                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Shadcn Smooth Scroll Action Button */}
            <div className="absolute bottom-6 right-6 z-20">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollToProducts}
                    className="rounded-full bg-black/40 border-white/20 hover:border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg animate-bounce"
                    aria-label="Scroll down to products"
                >
                    <ArrowDown className="h-4 w-4" />
                </Button>
            </div>
        </section>
    )
}