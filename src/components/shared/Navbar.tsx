"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { MegaMenu } from "@/components/shared/MegaMenu";
import { X } from 'lucide-react';
import { MobileNavLinks } from "@/lib/MobileNavLinks"
import { productsMenuData } from "@/data/menuData"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { IoHome } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { MdContactSupport } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-linear-to-r from-white to-gray-100 h-22 shadow-md flex items-center justify-between px-16">
            <h1 className="text-xl font-bold">La Gravure Moderne</h1>

            {/* Desktop Navigation - hidden on md and below */}
            <div className="hidden lg:flex">
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-8 text-lg font-medium">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/" className="text-[18px] font-medium hover:text-primary">
                                    Accueil
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-[18px] font-medium hover:text-primary">
                                Produits
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-white shadow-lg rounded-md p-4">
                                <MegaMenu />
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/contact" className="text-[18px] font-medium hover:text-primary">
                                    Contact
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/a-propos" className="text-[18px] font-medium hover:text-primary">
                                    À Propos
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <h3 className="hidden md:block text-md font-semibold">Contactez-nous : 54545454</h3>

            {/* MOBILE HAMBURGER MENU */}

            <Sheet >
                <SheetTrigger asChild>
                    <Menu className="block lg:hidden w-8 h-8 cursor-pointer" />
                </SheetTrigger>

                <SheetContent side="right" className="w-[320px] h-full bg-white p-0">
                    <div className="flex h-full flex-col">

                        <div className="border-b p-4">
                            <h2 className="font-bold text-lg">
                                La Gravure Moderne
                            </h2>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4">

                            <Link
                                href="/"
                                className="flex items-center gap-3 py-3"
                            >
                                <IoHome className="h-5 w-5" />
                                <span>Accueil</span>
                            </Link>

                            <Accordion type="single" collapsible>
                                <AccordionItem value="products">
                                    <AccordionTrigger>
                                        <div className="flex items-center gap-3">
                                            <AiOutlineProduct className="h-5 w-5" />
                                            <span>Produits</span>
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent>
                                        {productsMenuData.map((category) => (
                                            <div key={category.title} className="mb-4">
                                                <h3 className="font-semibold text-sm">
                                                    {category.title}
                                                </h3>

                                                <div className="ml-4 mt-2 flex flex-col gap-2">
                                                    {category.items.map((item) => (
                                                        <Link
                                                            key={item.href}
                                                            href={item.href}
                                                            className="py-1"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Link
                                href="/contact"
                                className="flex items-center gap-3 py-3"
                            >
                                <MdContactSupport className="h-5 w-5" />
                                <span>Contact</span>
                            </Link>

                            <Link
                                href="/a-propos"
                                className="flex items-center gap-3 py-3"
                            >
                                <RiContactsFill className="h-5 w-5" />
                                <span>À Propos</span>
                            </Link>

                        </div>

                        <div className="border-t p-4 text-sm text-muted-foreground">
                            Contactez-nous : 54545454
                        </div>

                    </div>
                </SheetContent>
            </Sheet>
        </nav >
    );
}
