import  { Meta, StoryObj } from "@storybook/react"
import { Checkbox as C, CheckboxProps } from "./Checkbox"
import { Text } from "./Text"

export default {
    title: "Components/Checkbox",
    component: C,
    args: {
        children: "Create account",
    },
    decorators: [
        (Story) => {
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">Lembrar de mim por 30 dias</Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Checkbox: StoryObj<CheckboxProps> = {}