import { IoHome } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { MdContactSupport } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

export interface MobileNavLinkType {
    title: string;
    href?: string; // Optional now, since "Produits" triggers an Accordion instead of a redirect
    icon: React.ComponentType<{ className?: string }>;
    isTrigger?: boolean; // Helps us identify that this item opens a menu
}

export const MobileNavLinks: MobileNavLinkType[] = [
    {
        title: "Accueil",
        href: "/",
        icon: IoHome,
    },
    {
        title: "Produits",
        href: "/products",
        icon: AiOutlineProduct,
        isTrigger: true, // Used to toggle your accordion or sub-links
    },
    {
        title: "A Propos",
        href: "/about-us",
        icon: MdContactSupport,
    },
    {
        title: "Contact",
        href: "/contact",
        icon: RiContactsFill,
    },
];