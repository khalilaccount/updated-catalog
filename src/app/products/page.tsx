import { Container } from "@/components/shared/Container"
import products from "@/lib/products.json"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link" // 1. Import Next.js Link
import { ShieldCheck, Award } from "lucide-react"


export default function ProductsPage() {
    return (
        <Container>
            {/* Principal Layout: Sidebar + Product Content Grid */}
            <div className="flex flex-col lg:flex-row gap-8 items-start pt-12">

                {/* LEFT COLUMN: Fixed Sticky Affiliation Sidebar */}
                <aside className="w-full lg:w-[280px] lg:sticky lg:top-24 space-y-4">
                    <Card className="border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 overflow-hidden">
                        <div className="p-5 text-center bg-gradient-to-br from-red-600 to-red-800 text-white">
                            <Award className="h-8 w-8 mx-auto mb-2 opacity-90" />
                            <h3 className="font-bold text-lg tracking-tight">Partenaire Officiel</h3>
                            <p className="text-xs text-red-100 font-medium tracking-wide uppercase mt-0.5">
                                Trodat Tunisie
                            </p>
                        </div>

                        <CardHeader className="p-4 space-y-3">
                            <div className="relative w-full h-12 flex items-center justify-center bg-white rounded border border-zinc-100 p-2">
                                <span className="font-black tracking-tighter text-2xl text-zinc-900">
                                    trodat<span className="text-red-600">®</span>
                                </span>
                            </div>
                            <CardDescription className="text-xs text-center leading-relaxed">
                                Garantie d'authenticité sur l'ensemble de nos montures automatiques, encriers et recharges d'encre d'origine.
                            </CardDescription>
                        </CardHeader>

                        <CardFooter className="p-4 pt-0 flex items-center justify-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 dark:bg-emerald-500/10 py-2 border-t border-zinc-100 dark:border-zinc-900">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            Produits 100% Certifiés
                        </CardFooter>
                    </Card>
                </aside>

                {/* RIGHT COLUMN: The Products Matrix Grid */}
                <main className="flex-1 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {products.map((product) => (
                            /* 2. Wrap each card map element inside a Link referencing product.href */
                            <Link
                                key={product.id}
                                href={product.href}
                                className="block group h-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
                            >
                                <Card className="flex flex-col overflow-hidden h-full border-zinc-200 dark:border-zinc-800 bg-card transition-all hover:shadow-md group-hover:border-zinc-300 dark:group-hover:border-zinc-700">

                                    {/* Image wrapper component */}
                                    <div className="relative w-full h-48 bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                                        <Image
                                            src={product.images[0]}
                                            alt={product.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-300 group-hover:scale-103"
                                        />
                                        <div className="absolute inset-0 bg-black/5 opacity-100 group-hover:opacity-0 transition-opacity" />
                                    </div>

                                    <CardHeader className="p-4 flex-1">
                                        <div className="mb-2">
                                            <Badge variant="secondary" className="text-[10px] uppercase font-mono tracking-wider">
                                                {product.subcategory || product.category}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-base font-bold tracking-tight line-clamp-1 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                                            {product.title}
                                        </CardTitle>
                                        <CardDescription className="text-xs line-clamp-3 mt-2 leading-relaxed">
                                            {product.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <div className="px-4 pb-2">
                                        <p className="text-base font-mono font-bold text-zinc-900 dark:text-zinc-50">
                                            {product.price ? `${product.price} TND` : "Prix sur devis"}
                                        </p>
                                    </div>

                                    <CardFooter className="p-4 pt-0 mt-auto">
                                        {/* 3. Use asChild so the Link outer container handles navigation cleanly */}
                                        <Button
                                            asChild
                                            className="w-full text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-50 dark:bg-zinc-50 dark:hover:bg-zinc-200 dark:text-zinc-900"
                                        >
                                            <span>Voir Plus</span>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </main>

            </div>
        </Container>
    )
}