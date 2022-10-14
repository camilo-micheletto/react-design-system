import { clsx as cl } from "clsx"
import { Slot } from "@radix-ui/react-slot"
import { ReactNode } from "react"

export interface HeadingProps {
    asChild?: boolean
    children: ReactNode,
    size?: "sm" | "md" | "lg",
}

export function Heading({ size = "md", asChild, children }: HeadingProps) {
    const Component = asChild ? Slot : "h2"
    return (
        <Component className={cl(
            "text-gray-100 font-bold font-sans",
            {
                "text-lg": size === "sm",
                "text-xl": size === "md",
                "text-2xl": size === "lg",
            }
        )}>{ children }</Component>
    )
}