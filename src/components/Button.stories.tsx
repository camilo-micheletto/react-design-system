import  { Meta, StoryObj } from "@storybook/react"
import { Button as B, ButtonProps } from "./Button"

export default {
    title: "Components/Button",
    component: B,
    args: {
        children: "Create account",
    },
    argTypes: {
    }
} as Meta<ButtonProps>

export const Button: StoryObj<ButtonProps> = {}