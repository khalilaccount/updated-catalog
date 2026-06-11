import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string; // Changed from "" to string
}

export function Container({
    children,
    className = "",
}: ContainerProps) {
    return (
        <div className={`
            mx-auto
            w-full
            px-4
            sm:px-6
            lg:px-16
            ${className}
        `}>
            {children}
        </div>
    )
}