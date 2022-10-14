import { clsx as cl } from "clsx"
import { Slot } from "@radix-ui/react-slot"
import { ReactNode } from "react"

export interface ButtonProps {
    asChild?: boolean
    children: ReactNode,
}

export function Button({ asChild, children }: ButtonProps) {
    const Component = asChild ? Slot : "button"
    return (
        <Component className={cl(
            `
            py-4 px-3
            w-full
            bg-cyan-500
            ring-white
            font-semibold text-black text-sm
            rounded
            transition-colors
            focus:ring-2 hover:bg-cyan-300
            `
        )}>{ children }</Component>
    )
}