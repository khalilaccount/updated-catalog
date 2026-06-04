import { productsMenuData } from "@/data/menuData"
import Link from "next/link"

export function MegaMenu() {
    return (
        <div className="w-[700px] p-6">
            <div className="grid grid-cols-3 gap-8">
                {productsMenuData.map((category) => (
                    <div key={category.title}>
                        <h3 className="mb-4 text-lg font-bold">{category.title}</h3>
                        <ul className="space-y-4">
                            {category.items.map((itme) => (
                                <li key={itme.title} className="leading-6">
                                    <Link href={itme.href} className="flex items-center gap-2 text-sm hover:text-primary">
                                        {itme.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}