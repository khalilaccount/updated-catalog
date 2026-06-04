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

            <Sheet>
                <SheetTrigger asChild>
                    <Menu className="block lg:hidden w-8 h-8 cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="bg-linear-to-l from-white to-gray-100 w-full h-full p-6">
                    <SheetHeader>
                        <SheetTitle className="text-2xl font-bold mb-4 text-center">Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col gap-6 mt-8">
                        <Link href="/" className="text-lg font-medium hover:text-primary border-b-2 border-gray-100 pb-1">
                            Accueil
                        </Link>
                        <Link href="/products" className="text-lg font-medium hover:text-primary">
                            Produits
                        </Link>
                        <Link href="/contact" className="text-lg font-medium hover:text-primary">
                            Contact
                        </Link>
                        <Link href="/a-propos" className="text-lg font-medium hover:text-primary">
                            À Propos
                        </Link>
                    </nav>
                    <SheetFooter>
                        <SheetClose asChild>
                            <X className="h-8 w-8 rounded bg-gray-900 text-white cursor-pointer" />
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </nav >
    );
}
