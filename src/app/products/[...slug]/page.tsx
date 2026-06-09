import products from "@/lib/products.json";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // 1. Import Breadcrumb components
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone, Mail, Home } from "lucide-react";
import React from "react"; // Needed for React.Fragment

interface ProductPageProps {
    params: Promise<{ slug: string[] }>;
}

export default async function DynamicProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const targetHref = `/products/${slug.join("/")}`;

    // Find product early if it's a specific product page
    const product = slug.length === 3 ? products.find((p) => p.href === targetHref) : null;

    if (slug.length === 3 && !product) notFound();

    // --- BREADCRUMB GENERATOR LOGIC ---
    // We build a reusable breadcrumb header that works for both views
    const BreadcrumbHeader = () => (
        <div className="mb-8">
            <Breadcrumb>
                <BreadcrumbList>
                    {/* Always show Home and Main Catalog */}
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/"><Home className="h-4 w-4" /></Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/products">Produits</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />

                    {/* Dynamically map through the slug to build the trail */}
                    {slug.map((segment, index) => {
                        const isLastItem = index === slug.length - 1;
                        // Reconstruct the path for this specific step (e.g., /products/tampons)
                        const path = `/products/${slug.slice(0, index + 1).join("/")}`;

                        // Format the text nicely (replace dashes with spaces and capitalize)
                        let displayText = segment.replace(/-/g, " ");
                        displayText = displayText.charAt(0).toUpperCase() + displayText.slice(1);

                        // If it's the very last item AND it's a product, show the actual product title instead of the ID
                        if (isLastItem && product) {
                            displayText = product.title;
                        }

                        return (
                            <React.Fragment key={path}>
                                <BreadcrumbItem>
                                    {isLastItem ? (
                                        // The current page is not clickable
                                        <BreadcrumbPage className="font-semibold text-zinc-900 dark:text-zinc-50">
                                            {displayText}
                                        </BreadcrumbPage>
                                    ) : (
                                        // Previous steps are clickable links
                                        <BreadcrumbLink asChild>
                                            <Link href={path} className="capitalize">
                                                {displayText}
                                            </Link>
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                                {/* Only add a separator if it's NOT the last item */}
                                {!isLastItem && <BreadcrumbSeparator />}
                            </React.Fragment>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );

    // 1. CASE: SINGLE PRODUCT VIEW (/products/category/subcategory/id)
    if (slug.length === 3 && product) {
        return (
            <Container className="py-12">
                <BreadcrumbHeader />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
                    <div className="relative aspect-square w-full rounded-lg border bg-zinc-50 overflow-hidden">
                        <Image src={product.images[0]} alt={product.title} fill className="object-contain p-4" />
                    </div>
                    <div className="space-y-6">
                        <div>
                            <Badge variant="outline">{product.subcategory}</Badge>
                            <h1 className="text-4xl font-extrabold mt-2">{product.title}</h1>
                        </div>
                        <p className="text-3xl font-black font-mono">{product.price ? `${product.price} TND` : "Sur Devis"}</p>
                        <p className="text-muted-foreground">{product.description}</p>
                        <div className="flex gap-3">
                            <Button asChild><a href="tel:+21650000000"><Phone className="mr-2 h-4 w-4" /> Appeler</a></Button>
                            <Button variant="outline" asChild><a href={`mailto:contact@email.tn?subject=Devis: ${product.title}`}><Mail className="mr-2 h-4 w-4" /> Email</a></Button>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    // 2. CASE: CATEGORY/SUBCATEGORY GRID VIEW (/products/category or /products/category/subcategory)
    const categoryProducts = products.filter((p) => p.href.startsWith(targetHref));

    if (categoryProducts.length === 0) notFound();

    return (
        <Container className="py-12">
            <BreadcrumbHeader />

            <div className="mb-10 mt-4">
                <h1 className="text-4xl font-bold capitalize">{slug[slug.length - 1].replace(/-/g, " ")}</h1>
                <p className="text-muted-foreground mt-2">Découvrez notre sélection de {slug[slug.length - 1].replace(/-/g, " ")}.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map((p) => (
                    <Link key={p.id} href={p.href} className="group">
                        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                            <div className="relative h-48 w-full bg-zinc-100 overflow-hidden">
                                <Image src={p.images[0]} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                            </div>
                            <CardHeader className="flex-1">
                                <CardTitle className="text-lg">{p.title}</CardTitle>
                                <CardDescription className="line-clamp-2">{p.description}</CardDescription>
                            </CardHeader>
                            <CardFooter className="font-bold font-mono">
                                {p.price ? `${p.price} TND` : "Sur Devis"}
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </Container>
    );
}