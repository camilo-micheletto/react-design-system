import { clsx as cl } from "clsx"
import { Slot } from "@radix-ui/react-slot"
import { ReactNode } from "react"

export interface TextProps {
    asChild?: boolean
    children: ReactNode,
    size?: "sm" | "md" | "lg",
}

export function Text({ size = "md", asChild, children }: TextProps) {
    const Component = asChild ? Slot : "span"
    return (
        <Component className={cl(
            "text-gray-100 font-sans",
            {
                "text-xs": size === "sm",
                "text-sm": size === "md",
                "text-md": size === "lg",
            }
        )}>{ children }</Component>
    )
}