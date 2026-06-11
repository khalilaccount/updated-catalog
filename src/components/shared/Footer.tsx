import { FaRegCopyright } from "react-icons/fa6";
import { Container } from "./Container";
import { productsMenuData } from "@/data/menuData";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-zinc-950 text-zinc-300 pt-16 pb-8 border-t border-zinc-900 mt-9">
            <Container>
                {/* Grid centered with mx-auto */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 mx-auto max-w-5xl">
                    {productsMenuData.map((category) => (
                        <div key={category.title} className="flex flex-col gap-4">
                            {/* Softer red color for titles */}
                            <h2 className="text-[#169875] font-bold uppercase tracking-widest text-sm">
                                {category.title}
                            </h2>
                            <ul className="flex flex-col gap-2">
                                {category.items.map((item) => (
                                    <li key={item.title}>
                                        <Link
                                            href={item.href}
                                            className="hover:text-white transition-colors text-sm"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright section with Company Name */}
                <div className="w-full border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-center gap-2 text-zinc-500 text-sm">
                    <div className="flex items-center gap-2">
                        <FaRegCopyright className="text-xs" />
                        <span>{currentYear} <span className="text-[#169875]">La Gravure Moderne</span>. Tous droits réservés.</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}