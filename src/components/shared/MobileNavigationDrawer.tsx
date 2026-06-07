import Link from "next/link";
import { MobileNavLinks } from "../../lib/MobileNavLinks";
import { productsMenuData } from "../../data/menuData"; // Your products menu array
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function MobileNavigationDrawer() {
    return (
        <div className="w-full max-w-sm p-4 bg-background h-full flex flex-col justify-between">
            <div className="space-y-4">
                <h2 className="text-lg font-bold tracking-tight px-2">Menu</h2>

                <div className="space-y-1">
                    {MobileNavLinks.map((link) => {
                        const Icon = link.icon;

                        // SCENARIO A: It is the "Produits" link (Triggers the Accordion Nesting)
                        if (link.isTrigger) {
                            return (
                                <Accordion type="single" collapsible className="w-full" key={link.title}>
                                    <AccordionItem value="products" className="border-none">
                                        {/* Main Category Accordion Trigger */}
                                        <AccordionTrigger className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:no-underline rounded-md hover:bg-accent transition-all">
                                            <div className="flex items-center gap-3">
                                                <Icon className="h-5 w-5 shrink-0" />
                                                <span>{link.title}</span>
                                            </div>
                                        </AccordionTrigger>

                                        {/* Submenu Level 1: Tampons, Plaque, Autres Produits */}
                                        <AccordionContent className="pt-1 pb-3 pl-8 pr-2">
                                            <Accordion type="single" collapsible className="w-full space-y-1">
                                                {productsMenuData.map((category) => (
                                                    <AccordionItem value={category.title} key={category.title} className="border-none">
                                                        <AccordionTrigger className="py-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-primary hover:no-underline">
                                                            {category.title}
                                                        </AccordionTrigger>

                                                        {/* Submenu Level 2: Specific items (e.g., Tampons Automatiques) */}
                                                        <AccordionContent className="pl-3 pt-1 pb-2 space-y-1 border-l ml-1 border-zinc-200 dark:border-zinc-800">
                                                            {category.items.map((item) => (
                                                                <Link
                                                                    key={item.href}
                                                                    href={item.href}
                                                                    className="block px-3 py-2 text-sm rounded-md text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                                                                >
                                                                    {item.title}
                                                                </Link>
                                                            ))}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                ))}
                                            </Accordion>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            );
                        }

                        // SCENARIO B: Standard Direct Link (Accueil, Support, Contact)
                        return (
                            <Link
                                key={link.href}
                                href={link.href || "/"}
                                className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                            >
                                <Icon className="h-5 w-5 shrink-0" />
                                <span>{link.title}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}