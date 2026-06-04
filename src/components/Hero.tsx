import Image from "next/image"
import Link from "next/link"

const heroCategories = [
    {
        title: "Precision Stamps",
        description: "Automatic, wooden & heavy-duty iron stamps.",
        imageSrc: "https://images.unsplash.com/photo-1578531504112-0dcd95eda450?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/products/stamps",
    },
    {
        title: "Plexiglass Creations",
        description: "Premium desk signs, display cases, and custom cutting.",
        imageSrc: "https://images.unsplash.com/photo-1611075551111-dfda5f9c6f02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    return (
        <section className="w-full h-[500px] flex flex-col md:flex-row overflow-hidden bg-black">
            {heroCategories.map((category, index) => (
                <Link
                    key={category.title}
                    href={category.href}
                    className="relative flex-1 group md:hover:[flex-[1.8]] transition-all duration-500 ease-in-out border-b md:border-b-0 md:border-r last:border-0 border-zinc-800 flex items-end p-6 md:p-12 overflow-hidden h-1/3 md:h-full"
                >
                    {/* Next.js Optimized Image Container */}
                    <div className="absolute inset-0 z-0 transition-transform duration-700 ease-in-out group-hover:scale-105">
                        <Image
                            src={category.imageSrc}
                            alt={category.title}
                            fill
                            priority={true} // Forces instant preloading for above-the-fold content
                            sizes="(max-width: 768px) 100vw, 33vw" // Critical for Next.js image size optimization
                            className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        />
                        {/* Dark Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 w-full transform md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                            0{index + 1} // Category Index
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                            {category.title}
                        </h2>
                        <p className="mt-2 text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs">
                            {category.description}
                        </p>
                        <div className="mt-4 inline-flex items-center text-xs font-semibold text-white uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                            Explore Catalog →
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    )
}