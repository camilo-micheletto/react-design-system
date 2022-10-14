import  { Meta, StoryObj } from "@storybook/react"
import { Heading as H, HeadingProps } from "./Heading"

export default {
    title: "Components/Heading",
    component: H,
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
} as Meta<HeadingProps>

export const Heading: StoryObj<HeadingProps> = {}