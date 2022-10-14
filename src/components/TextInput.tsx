import { clsx as cl } from "clsx"
import { InputHTMLAttributes, ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"


export interface TextInputRootProps { children: ReactNode }
function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <p className={cl(
            `
            flex items-center gap-3
            h-12
            py-4 px-3
            w-full 
            bg-gray-800
            rounded
            ring-cyan-300
             focus-within:ring-2`
        )}>
            {children}
        </p>
    )
}


export interface TextInputIconProps {
    children: ReactNode
}
function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className="w-6 h-6 text-gray-400">
            { props.children }
        </Slot>
    )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }
function TextInputInput(props: TextInputInputProps) {
    return (
        <input type="text" className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400" {...props} />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}