import { Meta, StoryObj } from "@storybook/react"
import { TextInput as TI, TextInputRootProps } from "./TextInput"
import { Envelope } from "phosphor-react";

export default {
    title: "Components/TextInput",
    component: TI.Root,
    args: {
        children: [
            <TI.Icon>
                <Envelope />
            </TI.Icon>,
            <TI.Input placeholder="Type your email address" />
        ]

    },
    argTypes: {
        children: {
            table: { disable: true }
        }
    }
} as Meta<TextInputRootProps>

export const TextInput: StoryObj<TextInputRootProps> = {}