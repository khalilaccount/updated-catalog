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
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-linear-to-r from-white to-gray-100 h-22 shadow-md flex items-center justify-between px-4 lg:px-16">
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
                                <Link href="/products" className="text-[18px] font-medium hover:text-primary">
                                    Produits
                                </Link>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-white shadow-lg rounded-md p-4">
                                <MegaMenu />
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/about" className="text-[18px] font-medium hover:text-primary">
                                    À Propos
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger className="hidden md:flex" asChild>
                    <Button
                        className="bg-black text-white hover:bg-zinc-900 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                        variant="outline"
                    >
                        <span className="mr-2 font-semibold">Contact</span>
                        <FaChevronDown />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-white text-black min-w-[200px]">

                    {/* 1. Item Téléphone — Entièrement cliquable */}
                    <DropdownMenuItem asChild className="focus:bg-zinc-200 focus:text-white cursor-pointer p-3">
                        <a href="tel:+21671700800" className="flex items-start gap-3 w-full">
                            <FaPhoneAlt className="mt-1 h-4 w-4 shrink-0" />
                            <div className="flex flex-col line-height-tight">
                                <span className="text-xs font-semibold opacity-70">Téléphone</span>
                                <span className="text-sm font-medium">71 700 800</span>
                            </div>
                        </a>
                    </DropdownMenuItem>

                    {/* 2. Item Email — Entièrement cliquable */}
                    <DropdownMenuItem asChild className="focus:bg-zinc-200 focus:text-white cursor-pointer p-3">
                        <a href="mailto:info@gravure-moderne@gmail.com" className="flex items-start gap-3 w-full">
                            <IoMdMail className="mt-1 h-4 w-4 shrink-0" />
                            <div className="flex flex-col line-height-tight">
                                <span className="text-xs font-semibold opacity-70">Mail</span>
                                <span className="text-sm font-medium">contact@votre-domaine.com</span>
                            </div>
                        </a>
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>

            {/* MOBILE HAMBURGER MENU */}

            <Sheet>
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
                                href="/about"
                                className="flex items-center gap-3 py-3"
                            >
                                <RiContactsFill className="h-5 w-5" />
                                <span>À Propos</span>
                            </Link>
                        </div>

                        {/* SECTION CONTACT EN BAS - DEUX DIVS CÔTE À CÔTE */}
                        <div className="grid grid-cols-2 bg-black text-white p-3 gap-2 border-t">

                            {/* Bloc Téléphone */}
                            <a
                                href="tel:+21671700800"
                                className="flex items-center gap-2 p-2 rounded-lg pointer-events-auto select-none"
                                style={{ pointerEvents: 'auto' }}
                            >
                                <FaPhoneAlt className="h-4 w-4 shrink-0 text-[#169875]" />
                                <div className="flex flex-col min-w-0">
                                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Appeler</span>
                                    <span className="text-xs font-semibold truncate">71 700 800</span>
                                </div>
                            </a>

                            {/* Bloc Email */}
                            <a
                                href="mailto:contact@votre-domaine.com"
                                className="flex items-center gap-2 p-2 rounded-lg pointer-events-auto select-none"
                            >
                                <IoMdMail className="h-4 w-4 shrink-0 text-[#169875]" />
                                <div className="flex flex-col min-w-0">
                                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Email</span>
                                    <span className="text-xs font-semibold truncate">Contact</span>
                                </div>
                            </a>

                        </div>

                    </div>
                </SheetContent>
            </Sheet>
        </nav >
    );
}
