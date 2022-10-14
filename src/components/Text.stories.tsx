import  { Meta, StoryObj } from "@storybook/react"
import { Text as T, TextProps } from "./Text"

export default {
    title: "Components/Text",
    component: T,
    args: {
        children: "Lorem ipsum",
        size: "sm"
    },
    argTypes: {
        size: {
            options: ["sm", "md", "lg"],
            control: { type: "select" }
        }
    }
} as Meta<TextProps>

export const Text: StoryObj<TextProps> = {}